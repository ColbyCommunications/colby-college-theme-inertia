const puppeteer = require('puppeteer');
const percySnapshot = require('@percy/puppeteer');
const fs = require('fs');
const path = require('path');
const scrollToBottom = require('scroll-to-bottomjs');

(async () => {
  // Go up one level from /scripts/ to find the root, then into /storybook-static/
  const buildDir = path.resolve(__dirname, '../storybook-static');
  const indexFile = path.join(buildDir, 'index.json');
  const storiesFile = path.join(buildDir, 'stories.json');

    const scrollOptions = {
        frequency: 100,
        timing: 200, // milliseconds
    };
  
  let metadataPath = fs.existsSync(indexFile) ? indexFile : storiesFile;

  if (!fs.existsSync(metadataPath)) {
    console.error(`Error: Could not find index.json or stories.json in ${buildDir}`);
    // Helpful debug: show what is actually in that folder
    if (fs.existsSync(buildDir)) {
      console.log("Files found in storybook-static:", fs.readdirSync(buildDir));
    } else {
      console.log("The directory storybook-static does not exist at:", buildDir);
    }
    process.exit(1);
  }

  const fileContent = JSON.parse(fs.readFileSync(metadataPath, 'utf8'));
  const data = fileContent.entries || fileContent.stories;

  // Regex to match your specific folder
  const includePattern = /^Templates\/Page Show\/.*/;

  const storyIds = Object.keys(data).filter(id => {
    // We check the 'title' property which contains the folder path
    // return includePattern.test(data[name].title);
    return id === 'templates-page-show-full-page--carousel-manual-grid-manual-section-manual';
  });

  if (storyIds.length === 0) {
    console.log("No stories matched the pattern: ^Templates/Page Show/.*");
    console.log("Check if your Storybook titles match this exactly in your .stories.js files.");
    process.exit(0);
  }

  console.log(`Found ${storyIds.length} matching stories. Starting Puppeteer...`);

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();
  const baseUrl = 'http://127.0.0.1:6006/iframe.html';

  for (const id of storyIds) {
    const story = data[id];
    console.log(`Snapshotting: ${story.title} > ${story.name}`);
    
    await page.setUserAgent('colby-github');

    // Standard Storybook URL format for the iframe
    await page.goto(`${baseUrl}?id=${id}&viewMode=story`, {
      waitUntil: 'networkidle2',
      timeout: 60000
    });

    // Give Vue components a second to mount and stabilize
    await new Promise(r => setTimeout(r, 2000));

    await page.evaluate(async () => {
      const selectors = Array.from(document.querySelectorAll('img'));
      await Promise.all(selectors.map(img => {
        if (img.complete) return;
        return new Promise((resolve, reject) => {
          img.onload = resolve;
          img.onerror = resolve; // Don't hang the test if one image 404s
        });
      }));
    });

    await page.evaluate(scrollToBottom, scrollOptions);
    
    await new Promise(r => setTimeout(r, 2000));

    await percySnapshot(page, `${story.title}: ${story.name}`, {
      widths: [375, 1280],
      enableJavaScript: true
    });
  }

  await browser.close();
  console.log('Percy run complete!');
})();