import clsx from "clsx";
import { FC, HTMLAttributes } from "react";
import { Link } from "../Link";
import styles from "./styles.module.css";

export interface TagsProps extends HTMLAttributes<HTMLUListElement> {
  tags?: Array<string>;
  size?: "sm" | "md" | "lg";
}

export const Tags: FC<TagsProps> = ({
  className,
  tags = [],
  size,
  ...props
}) => {
  return (
    <ul
      className={clsx([styles.tags, styles[size], className])}
      aria-label="Tags"
      {...props}
    >
      {tags.map((tag) => (
        <li
          key={tag}
          className={clsx([
            styles.tag,
            tag.match(/unpublished/i) && styles.draft,
          ])}
        >
          <Link>{tag}</Link>
        </li>
      ))}
    </ul>
  );
};
