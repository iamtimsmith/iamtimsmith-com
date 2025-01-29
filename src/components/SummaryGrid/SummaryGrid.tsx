import clsx from "clsx";
import { FC, HTMLAttributes } from "react";
import { getLatestPosts } from "../../helpers/getLatestPosts";
import { Container } from "../Container";
import { Grid } from "../Grid";
import { Link } from "../Link";
import styles from "./styles.module.css";

export interface SummaryGridProps extends HTMLAttributes<HTMLDivElement> {
  count?: number;
  title?: string;
  titleHref?: string;
}

export const SummaryGrid: FC<SummaryGridProps> = ({
  className,
  count,
  title = "Recent Posts",
  titleHref,
  ...props
}) => {
  const posts = getLatestPosts(count);

  return (
    <Container
      className={clsx([styles.summaryGrid, className])}
      variant="wide"
      {...props}
    >
      <h2 className={styles.title} id="recent-posts" role="heading">
        <Link
          className={styles.titleLink}
          href={titleHref}
          aria-label="Link to blog page"
        >
          {title}
        </Link>
      </h2>
      <Grid
        items={posts.map(({ frontmatter, slug }) => ({
          title: frontmatter.title,
          description: frontmatter.excerpt,
          meta: frontmatter.tags,
          slug,
        }))}
      />
    </Container>
  );
};
