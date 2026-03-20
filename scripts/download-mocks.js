const fs = require('fs');
const path = require('path');
const https = require('https');

const assetsToDownload = [
  {
    url: "https://www.colby.edu/wp-content/uploads/2024/12/20220914_sunrise_0052-HDR-1.jpg",
    dest: "hero-placeholder.jpg"
  }
];

const publicDir = path.resolve(__dirname, '../storybook-static/mock-assets');

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

assetsToDownload.forEach(({ url, dest }) => {
  const file = fs.createWriteStream(path.join(publicDir, dest));
  https.get(url, (response) => {
    response.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log(`Downloaded: ${dest}`);
    });
  });
});