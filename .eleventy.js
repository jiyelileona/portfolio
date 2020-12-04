const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const embedYouTube = require('eleventy-plugin-youtube-embed');
const blogTools = require('eleventy-plugin-blog-tools');
const moment = require('moment');
const settings = JSON.parse(require('fs').readFileSync('./src/_data/settings.json'));

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(blogTools);
  eleventyConfig.addPlugin(embedYouTube, {
    lite: true,
  });

  eleventyConfig.setBrowserSyncConfig({
    watch: true,
    open: true,
  });

  eleventyConfig.addFilter('fromNow', function (date) {
    let m = moment(date);
    return m.fromNow();
  });

  eleventyConfig.addFilter('icon', function (title) {
    return settings.icons[title] || 'no icon';
  });

  eleventyConfig.addFilter('yearSlashMonth', function (date) {
    let m = moment(date);
    return m.format('YYYY/MMM');
  });

  eleventyConfig.addFilter('getDate', function (date) {
    return moment(date).format('MMM Do. YYYY');
  });

  eleventyConfig.addCollection('pagesWithIcons', function (collectionApi) {
    let pages = [...collectionApi.getFilteredByTag('page')];

    return pages;
  });
  
  eleventyConfig.addPairedShortcode('code', function (content, title, date, info) {
    date = moment(date).format('MMM Do. YYYY');

    return `<div class="lab-item"><div class="codepen">${content}</div><div class="lab-content"><h3>${title}</h3><div class="info">${date}</div><p>${info}</p></div></div>`;
  });

  eleventyConfig.addPairedShortcode('recipe', function (content, title, link, imageLink) {
    return ` <div class="list-item"><img src="${imageLink}"><div class="info"><h3><a href="${link}">${title}</a></h3><p>${content}</p></div></div>`;
  });

  eleventyConfig.addPassthroughCopy('src/images');

  return {
    htmlTemplateEngine: 'njk',
    mardownTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'dist',
      includes: '_includes',
      layouts: '_layouts',
      data: '_data',
    },
  };
};
