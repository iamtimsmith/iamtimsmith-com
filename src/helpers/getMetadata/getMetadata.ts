import { Metadata } from "next";
import { baseUrl, siteName } from "../../constants";
import { getContentBySlug } from "../getContentBySlug";

export const getMetadata = (slug: string): Metadata => {
  const {
    frontmatter: { title: postTitle, excerpt, featuredImage },
    slug: postSlug,
  } = getContentBySlug(slug);

  // Format the title
  const title = slug.match(/home/i) ? `${postTitle} | ${siteName}` : postTitle;

  return {
    title,
    description: excerpt,
    openGraph: {
      title,
      description: excerpt,
      url: `${baseUrl}${postSlug}`,
      siteName,
      type: "website",
      images: [
        {
          url: featuredImage,
          width: 1200,
          height: 630,
          alt: postTitle,
        },
      ],
    },
  };
};
