/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_WEBSITE_URL || "https://www.iamtimsmith.com",
  generateRobotsTxt: true,
  // ...other options
};
