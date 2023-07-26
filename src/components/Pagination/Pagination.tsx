// import { getPageCount } from "@/utils/api";
import clsx from "clsx";
import Link from "next/link";
import styles from "./styles.module.css";

interface PaginationProps {
  page: number;
  pageCount: number;
  baseUrl: string;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}

export const Pagination = ({
  page,
  pageCount,
  baseUrl,
  hasNextPage,
  hasPreviousPage,
}: PaginationProps) => {
  const prevPage = page - 1 !== 1 ? `${baseUrl}/page/${page - 1}` : baseUrl;

  return (
    <nav className={styles.pagination}>
      <Link
        className={clsx([
          styles.paginationLink,
          hasPreviousPage && styles.paginationLinkVisible,
        ])}
        href={prevPage}
      >
        ← Previous
      </Link>
      <p className={styles.paginationCount}>
        Page {page} / {pageCount}
      </p>
      <Link
        className={clsx([
          styles.paginationLink,
          hasNextPage && styles.paginationLinkVisible,
        ])}
        href={`/blog/page/${page + 1}`}
      >
        Next →
      </Link>
    </nav>
  );
};
