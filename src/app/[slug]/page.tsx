import { Container } from "../../components/Container";
import { Content } from "../../components/Content";
import { getContentBySlug } from "../../helpers/getContentBySlug";
import { getMetadata } from "../../helpers/getMetadata";

export const generateMetadata = ({ params }) => {
  if (params.slug.match(/\.ico/i)) getMetadata(params.slug);
};

interface DynamicPageProps {
  params: Promise<{ slug: string }>;
  searchParams: URLSearchParams;
}

const DynamicPage = async ({ params }: DynamicPageProps) => {
  const { slug } = await params;

  if (slug === "favicon.ico") return;

  const post = getContentBySlug(slug);

  return (
    <main>
      <Container>
        <h1>{post.frontmatter.title}</h1>
        <Content>{post.content}</Content>
      </Container>
    </main>
  );
};

export default DynamicPage;
