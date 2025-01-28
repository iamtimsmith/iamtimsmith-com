import clsx from "clsx";
import { FC, HTMLAttributes } from "react";
import { Link } from "../Link";
import styles from "./styles.module.css";

export interface TagsProps extends HTMLAttributes<HTMLUListElement> {
  tags?: Array<string>;
}

export const Tags: FC<TagsProps> = ({ className, tags, ...props }) => {
  return (
    <ul className={clsx([styles.tags, className])} aria-label="Tags" {...props}>
      {tags.map((tag) => (
        <li key={tag} className={styles.tag}>
          <Link>{tag}</Link>
        </li>
      ))}
    </ul>
  );
};
