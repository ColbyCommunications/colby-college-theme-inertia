const puppeteer = require('puppeteer');
const percySnapshot = require('@percy/puppeteer');
const fs = require('fs');
const path = require('path');

(async () => {
  // 1. Load the Storybook Index
  const indexPath = path.resolve(__dirname, 'storybook-static/index.json');
  if (!fs.existsSync(indexPath)) {
    console.error("Error: index.json not found. Run 'npm run build-storybook' first.");
    process.exit(1);
  }

  const { entries } = JSON.parse(fs.readFileSync(indexPath, 'utf8'));

  // 2. Define your include pattern (matching your requirement exactly)
  const includePattern = /^Templates\/Page Show\/.*/;

  // 3. Filter entries based on the 'title' (which is the path in Storybook)
  const storyIds = Object.keys(entries).filter(id => {
    const story = entries[id];
    // Storybook 7/8 uses 'title' for the folder path and 'name' for the story name
    return includePattern.test(story.title);
  });

  if (storyIds.length === 0) {
    console.log("No stories matched the pattern: ^Templates/Page Show/.*");
    process.exit(0);
  }

  console.log(`Found ${storyIds.length} matching stories. Starting Percy...`);

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();
  const baseUrl = 'http://127.0.0.1:6006/iframe.html';

  for (const id of storyIds) {
    const story = entries[id];
    console.log(`Snapshotting: ${story.title} > ${story.name}`);

    // Navigate to the clean iframe URL
    await page.goto(`${baseUrl}?id=${id}&viewMode=story`, {
      waitUntil: 'networkidle2',
    });

    // Wait for hydration/animations
    await new Promise(r => setTimeout(r, 1000));

    // Optional: Scroll to trigger lazy loading
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await new Promise(r => setTimeout(r, 500));
    await page.evaluate(() => window.scrollTo(0, 0));

    await percySnapshot(page, `${story.title}: ${story.name}`, {
      widths: [375, 1280]
    });
  }

  await browser.close();
  console.log('Finished Percy snapshots.');
})();