import { MDXRemote } from "next-mdx-remote/rsc";
import { FC } from "react";
import { Author } from "../components/Author";
import { Container } from "../components/Container";
import { SummaryGrid } from "../components/SummaryGrid";
import { getContentBySlug } from "../helpers/getContentBySlug";
import { getMetadata } from "../helpers/getMetadata";
import { PageProps } from "../types";

export const generateMetadata = () => getMetadata("home");

export interface HomePageProps extends PageProps {
  className?: string;
}

const HomePage: FC<HomePageProps> = ({ className, searchParams, ...props }) => {
  const page = getContentBySlug("home");

  return (
    <main {...props}>
      <Container>
        <MDXRemote source={page.content} />
        <Author />
      </Container>
      <SummaryGrid />
    </main>
  );
};

export const revalidate = 60; // Revalidate this page every 60 seconds

export default HomePage;
