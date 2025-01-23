import { HTMLAttributes } from "react";
import { getWordCount } from "../../helpers/getWordCount";
import styles from "./styles.module.css";

interface EnvironmentBarProps extends HTMLAttributes<HTMLDivElement> {
  content?: string;
}

export const EnvironmentBar = ({ content, ...props }: EnvironmentBarProps) => {
  const wordCount = getWordCount(content);

  return (
    <div className={styles.environmentBar} {...props}>
      <p>
        Environment:{" "}
        <span className={styles.environmentBarEnv}>{process.env.NODE_ENV}</span>
      </p>
      {content && (
        <p>
          Length: {wordCount} {wordCount === 1 ? "word" : "words"}
        </p>
      )}
    </div>
  );
};
