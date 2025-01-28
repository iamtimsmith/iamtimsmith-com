/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_WEBSITE_URL || "http://localhost:1125",
  generateRobotsTxt: true,
  // ...other options
};
