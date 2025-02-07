import clsx from "clsx";
import { FC, HTMLAttributes } from "react";
import { Link } from "../Link";
import { Tags } from "../Tags";
import styles from "./styles.module.css";

export interface GridProps extends HTMLAttributes<HTMLUListElement> {
  items?: {
    title: string;
    description?: string;
    isPublished?: boolean;
    meta?: string[];
    slug?: string;
  }[];
}

export const Grid: FC<GridProps> = ({
  className,
  children,
  items = [],
  ...props
}) => (
  <ul className={clsx([styles.grid, className])} {...props}>
    {items.map(({ title, description, isPublished, meta, slug }) => (
      <li className={styles.item} key={slug}>
        <article className={styles.summary} aria-label={title}>
          {meta && (
            <Tags
              tags={[
                ...(!isPublished ? ["Unpublished"] : []),
                ...meta.map((tag) => tag),
              ]}
            />
          )}
          <Link className={styles.summaryTitle} href={slug}>
            {title}
          </Link>
          <p className={styles.summaryExcerpt}>{description}</p>
        </article>
      </li>
    ))}
  </ul>
);
