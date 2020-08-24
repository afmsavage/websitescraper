const scrape = require('website-scraper');
const websiteUrl = 'http://www.meterpro.com/';

scrape({
  urls: [websiteUrl],
  urlFilter: function (url) {
    return url.indexOf(websiteUrl) === 0;
  },
  recursive: true,
  maxDepth: 50,
  prettifyUrls: true,
  filenameGenerator: 'bySiteStructure',
  directory: './website', // where to place the website files
})
  .then((data) => {
    console.log('Entire website succesfully downloaded');
  })
  .catch((err) => {
    console.log('An error ocurred', err);
  });
