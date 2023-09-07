export type Site = "Email" | "Facebook" | "Linkedin" | "Pinterest" | "Twitter";

export const getSharingUrl = (
  site: Site,
  url: string,
  title: string,
  excerpt: string,
  image: string
) => {
  switch (site) {
    case "Email":
      return `mailto:?&body=Check%20this%20article%20out!%0A%0A${url}"`;

    case "Facebook":
      return `https://www.facebook.com/sharer.php?u=${url}`;

    case "Linkedin":
      return `https://linkedin.com/shareArticle?mini=true&url=${url}&title=${title}`;

    case "Pinterest":
      return `https://pinterest.com/pin/create/button/?url=${url}&description=${excerpt}&media=${image}`;

    case "Twitter":
      return `https://twitter.com/intent/tweet?text=${title}&url=${url}&via=iam_timsmith`;

    default:
      return "";
  }
};
