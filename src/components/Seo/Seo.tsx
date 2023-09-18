import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import config from "../../../content/global/index.json";

interface SeoProps {
  title: string;
  description: string;
  image: string;
}

export const Seo = ({ title, description, image }: SeoProps) => {
  const router = useRouter();
  const route = process.env.NEXT_PUBLIC_WEBSITE_URL + router.asPath;

  return (
    <NextSeo
      title={`${title} | ${config.header.siteName}`}
      description={description}
      canonical={route}
      openGraph={{
        url: route,
        title: title,
        description: description,
        images: [
          {
            url: image,
            width: 800,
            height: 600,
            alt: title,
            type: "image/jpeg",
          },
        ],
        siteName: config.header.siteName,
      }}
      twitter={{
        handle: config.author.twitter,
        site: process.env.WEBSITE_URL,
        cardType: "summary_large_image",
      }}
    />
  );
};
