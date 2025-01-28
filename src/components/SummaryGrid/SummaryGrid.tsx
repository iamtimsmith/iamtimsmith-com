import clsx from "clsx";
import { FC, HTMLAttributes } from "react";
import { getLatestPosts } from "../../helpers/getLatestPosts";
import { Container } from "../Container";
import { Link } from "../Link";
import { Tags } from "../Tags";
import styles from "./styles.module.css";

export interface SummaryGridProps extends HTMLAttributes<HTMLDivElement> {
  count?: number;
}

export const SummaryGrid: FC<SummaryGridProps> = ({
  className,
  count,
  ...props
}) => {
  const posts = getLatestPosts(count);

  return (
    <Container
      className={clsx([styles.summaryGrid, className])}
      variant="wide"
      {...props}
    >
      <h2 className={styles.title} id="recent-posts">
        Recent Posts
      </h2>
      <ul className={styles.grid} aria-labelledby="recent-posts">
        {posts.map(({ frontmatter, slug }) => (
          <li key={slug}>
            <article className={styles.summary}>
              {frontmatter.tags && <Tags tags={frontmatter.tags} />}
              <Link
                className={styles.summaryTitle}
                href={slug}
                title={frontmatter.title}
              >
                {frontmatter.title}
              </Link>
              <p className={styles.summaryExcerpt}>{frontmatter.excerpt}</p>
            </article>
          </li>
        ))}
      </ul>
    </Container>
  );
};
