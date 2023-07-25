import { tinaField } from "tinacms/dist/react";
import { Post } from "../../../tina/__generated__/types";
import { Link } from "../Link";
import styles from "./styles.module.css";

interface PostSummaryProps {
  post: Post;
}

export const PostSummary = ({ post }: PostSummaryProps) => {
  const {
    title,
    excerpt,
    _sys: { filename },
  } = post;

  return (
    <article data-tina-field={tinaField(post)}>
      <Link
        className={styles.blogPostSummaryTitle}
        url={`/blog/${filename}`}
        title={title}
      >
        {title}
      </Link>
      <p className={styles.blogPostSummaryExcerpt}>{excerpt}</p>
    </article>
  );
};
