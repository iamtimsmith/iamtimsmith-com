import clsx from "clsx";
import { FC, HTMLAttributes } from "react";
import { getLatestPosts } from "../../helpers/getLatestPosts";
import { Container } from "../Container";
import { Link } from "../Link";
import { Tags } from "../Tags";
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
      <ul className={styles.grid} aria-labelledby="recent-posts">
        {posts.map(({ frontmatter, slug }) => (
          <li className={styles.item} key={slug}>
            <article className={styles.summary}>
              {frontmatter.tags && <Tags tags={frontmatter.tags} />}
              <Link className={styles.summaryTitle} href={slug}>
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
