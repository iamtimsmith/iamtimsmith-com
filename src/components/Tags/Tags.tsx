import { tinaField } from "tinacms/dist/react";
import { Post } from "../../../tina/__generated__/types";
import { Link } from "../Link";
import styles from "./styles.module.css";

interface TagsProps {
  tags: string[];
  post?: Post;
}

export const Tags = ({ tags, post }: TagsProps) => (
  <p className={styles.tags} data-tina-field={tinaField(post, "tags")}>
    Tags:{" "}
    {tags?.map((tag) => (
      <Link className={styles.tag} url={`/tags/${tag}`} key={tag}>
        #{tag}
      </Link>
    ))}
  </p>
);
