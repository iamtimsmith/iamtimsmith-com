import { Link } from "../Link";
import styles from "./styles.module.css";

interface SummaryProps {
  title: string;
  excerpt?: string;
  url?: string;
}

export const Summary = ({ title, excerpt, url, ...props }: SummaryProps) => {
  return (
    <article {...props}>
      <Link className={styles.summaryTitle} url={url} title={title}>
        {title}
      </Link>
      <p className={styles.summaryExcerpt}>{excerpt}</p>
    </article>
  );
};
