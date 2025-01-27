import {
  DevIcon,
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
} from "./components/Icons";

/**
 * SITE CONFIG
 */
export const siteName = "Tim Smith";
export const siteDescription =
  "Tim Smith is a software engineer working with Node, React, and more!";
export const favicon =
  "https://res.cloudinary.com/dcrgbfjfu/image/upload/v1644109225/iamtimsmith/favicon_snggon.ico";
export const postsPerPage = 6;

/**
 * AUTHOR CONFIG
 */
export const authorName = "Tim Smith";
export const authorPortrait =
  "https://res.cloudinary.com/dcrgbfjfu/image/upload/v1644109224/iamtimsmith/timsmith_fyh0hq.jpg";
export const authorBio =
  "I build things using React, Node, PHP, and more. Currently, I’m a Software Engineer working on <a href='https://www.dndbeyond.com'>D&D Beyond</a> at <a href='https://company.wizards.com/en'>Wizards of the Coast</a>. You can follow me on Twitter at <a href='https://www.twitter.com/iam_timsmith'>@iam_timsmith</a>.\n";
export const twitterHandle = "@iam_timsmith";

/**
 * NAVIGATION CONFIG
 */
export const mainNav = [
  {
    title: "Blog",
    url: "/blog",
  },
  {
    title: "Tags",
    url: "/tags",
  },
];

export const socialNav = [
  {
    icon: LinkedinIcon,
    title: "Linkedin",
    url: "https://www.linkedin.com",
  },
  {
    icon: DevIcon,
    title: "Dev",
    url: "https://dev.to",
  },
  {
    icon: GithubIcon,
    title: "Github",
    url: "https://www.github.com/iamtimsmith",
  },
  {
    icon: TwitterIcon,
    title: "Twitter",
    url: "https://www.twitter.com",
  },
];
