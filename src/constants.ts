import {
  CloudinaryIcon,
  DevIcon,
  EmailIcon,
  FacebookIcon,
  GithubIcon,
  LinkedinIcon,
  PinterestIcon,
  TwitterIcon,
} from "./components/Icons";

/**
 * ENVIRNONMENT VARIABLES
 */
export const mailchimpApiKey =
  process.env.MAILCHIMP_API_KEY || "MAILCHIMP_API_KEY";
export const mailchimpAudienceId =
  process.env.MAILCHIMP_AUDIENCE_ID || "MAILCHIMP_AUDIENCE_ID";
export const mailchimpServer =
  process.env.MAILCHIMP_API_SERVER || "MAILCHIMP_API_SERVER";
export const mailchimpApiUrl = `https://${mailchimpServer}.api.mailchimp.com/3.0/lists/${mailchimpAudienceId}/members`;
export const baseUrl =
  process.env.NEXT_PUBLIC_WEBSITE_URL || "https://www.iamtimsmith.com";

/**
 * SITE CONFIG
 */
export const siteName = "Tim Smith";
export const siteDescription =
  "Tim Smith is a software engineer working with Node, React, and more!";
export const favicon =
  "https://res.cloudinary.com/dcrgbfjfu/image/upload/v1738505719/iamtimsmith/timsmith-purple_eajqb4.png";
export const postsPerPage = 6;

/**
 * AUTHOR CONFIG
 */
export const authorName = "Tim Smith";
export const authorPortrait =
  "https://res.cloudinary.com/dcrgbfjfu/image/upload/v1644109224/iamtimsmith/timsmith_fyh0hq.jpg";
export const authorBio =
  "I build things using React, Node, PHP, and more. Currently, I’m a Software Engineer working on <a href='https://www.dndbeyond.com'><span>D&D Beyond</span></a> at <a href='https://company.wizards.com/en'><span>Wizards of the Coast</span></a>. You can follow me on Twitter at <a href='https://www.twitter.com/iam_timsmith'><span>@iam_timsmith</span></a>.\n";
export const twitterHandle = "@iam_timsmith";

/**
 * SUCCESS AND ERROR MESSAGES
 */
export const noEmail = "Email is required. Please try again.";
export const invalidEmail = "Please provide a valid email address.";
export const subscribeError =
  "Something went wrong! You can contact me at tim@iamtimsmith.com and I'll get you added.";
export const subscribeSuccess =
  "Awesome! You're signed up and can expect a monthly email with all of my latest blog posts!";

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

/**
 * SHARING CONFIG
 */
export const sharingSites = [
  { name: "Facebook", icon: FacebookIcon },
  { name: "Twitter", icon: TwitterIcon },
  { name: "Linkedin", icon: LinkedinIcon },
  { name: "Pinterest", icon: PinterestIcon },
  { name: "Email", icon: EmailIcon },
];

/**
 * ENVIRNOMENT BAR CONFIG
 */
export const envSites = [
  {
    icon: CloudinaryIcon,
    title: "Cloudinary",
    url: "https://console.cloudinary.com/console/c-3e303a1313826632110436fcbd4a8a/media_library/folders/bf66456f24094f0e225a84af72ae8cdfd9?view_mode=mosaic",
  },
  {
    icon: GithubIcon,
    title: "Github",
    url: "https://github.com/iamtimsmith/iamtimsmith-com",
  },
];
