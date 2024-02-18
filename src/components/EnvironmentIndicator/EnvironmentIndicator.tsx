import { wordCount } from "../../utils/wordCount";
import styles from "./styles.module.css";

interface EnvironmentIndicatorProps {
  content?: string;
}

export const EnvironmentIndicator = ({
  content,
}: EnvironmentIndicatorProps) => {
  const wordLength = wordCount(content);
  return (
    <div className={styles.environmentIndicator}>
      <p>
        <a className={styles.adminButton} href="/admin/index.html">
          Admin
        </a>
      </p>
      <p>
        Environment:{" "}
        <span className={styles.environmentIndicatorEnv}>
          {process.env.NODE_ENV}
        </span>
      </p>
      {content && (
        <p>
          Length: {wordLength} {wordLength === 1 ? "word" : "words"}
        </p>
      )}
    </div>
  );
};
