export type Site = "Email" | "Facebook" | "Linkedin" | "Pinterest" | "Twitter";

export const getSharingUrl = (
  site: Site,
  pageUrl: string,
  pageTitle: string,
  pageExcerpt: string,
  pageImage: string
) => {
  if (!pageUrl) return "";
  let url: string;
  let title: string;
  let description: string;
  let image: string;

  switch (site) {
    case "Email":
      url = pageUrl;

      return `mailto:?&body=Check%20this%20article%20out!%0A%0A${url}"`;

    case "Facebook":
      url = `&u=${pageUrl}`;

      return `https://www.facebook.com/sharer.php?u=${url}`;

    case "Linkedin":
      url = `&url=${pageUrl}`;
      title = `&title=${pageTitle}`;

      return `https://linkedin.com/shareArticle?mini=true${url}${title}`;

    case "Pinterest":
      url = `url=${pageUrl}`;
      description = `&description=${pageExcerpt}`;
      image = `&media=${pageImage}`;

      return `https://pinterest.com/pin/create/button/?${url}${description}${image}`;

    case "Twitter":
      title = `text=${pageTitle}`;
      url = `&url=${pageUrl}`;

      return `https://twitter.com/intent/tweet?${title}${url}&via=iam_timsmith`;

    default:
      return "";
  }
};
