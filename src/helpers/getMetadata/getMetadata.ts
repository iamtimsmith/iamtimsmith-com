import { Metadata } from "next";
import { siteName } from "../../constants";
import { getContentBySlug } from "../getContentBySlug";

export const getMetadata = (slug: string): Metadata => {
  console.log("URL", process.env.NEXT_PUBLIC_WEBSITE_URL);
  const {
    frontmatter: { title: postTitle, excerpt, featuredImage },
  } = getContentBySlug(slug);

  // Format the title
  const title = slug === "home" ? `${postTitle} | ${siteName}` : postTitle;

  return {
    title,
    description: excerpt,
    openGraph: {
      title,
      description: excerpt,
      url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/${slug}`,
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
