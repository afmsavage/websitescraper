const scrape = require('website-scraper');
const site = 'http://www.meterpro.com/';

scrape({
  urls: [site],
  urlFilter: function (url) {
    return url.indexOf(site) === 0;
  },
  recursive: true,
  maxDepth: 40,
  prettifyUrls: true,
  filenameGenerator: 'bySiteStructure',
  directory: './website', // where to place the website files
}).then(() => {
  console.log('Scraped successfully, enjoy!');
});

scrape().catch((err) => {
  console.log(err);
});
