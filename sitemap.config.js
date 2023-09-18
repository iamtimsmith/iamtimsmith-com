/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.WEBSITE_URL || "http://localhost:1125",
  generateRobotsTxt: true,
  // ...other options
};
