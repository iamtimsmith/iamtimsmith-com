import Head from "next/head";
import { useRouter } from "next/router";
import { PropsWithChildren } from "react";
import config from "../../../content/global/index.json";

interface SeoProps extends PropsWithChildren {
  title: string;
  description: string;
  image: string;
}

export const Seo = ({ title, description, image, children }: SeoProps) => {
  const router = useRouter();
  const baseUrl =
    process.env.NODE_ENV === "development"
      ? "http://localhost:1125"
      : "https://www.iamtimsmith.com";

  return (
    <Head>
      <title>
        {title} | {config.header.siteName}
      </title>
      <meta name="description" content={description} />
      <link rel="canonical" href={`${baseUrl}${router.asPath}`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@iam_timsmith" />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:image" content={image} />
      <meta name="og:type" content="website" />
      <meta name="og:url" content={`${baseUrl}${router.asPath}`} />
      <meta name="og:site_name" content={config.header.siteName} />
      {children}
    </Head>
  );
};
