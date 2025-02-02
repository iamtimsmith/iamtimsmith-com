import { HTMLAttributes } from "react";
import { envSites } from "../../constants";
import { getWordCount } from "../../helpers/getWordCount";
import { Link } from "../Link";
import styles from "./styles.module.css";

interface EnvironmentBarProps extends HTMLAttributes<HTMLDivElement> {
  content?: string;
}

export const EnvironmentBar = ({ content, ...props }: EnvironmentBarProps) => {
  const wordCount = getWordCount(content);

  return (
    <div className={styles.environmentBar} {...props}>
      <div className={styles.container}>
        <p>
          Environment:{" "}
          <span className={styles.env}>{process.env.NODE_ENV}</span>
        </p>
        {content && (
          <p>
            Length: {wordCount} {wordCount === 1 ? "word" : "words"}
          </p>
        )}
        <ul className={styles.sites}>
          {envSites.map(({ title, url, icon: Icon }) => (
            <li className={styles.site} key={title}>
              <Link href={url} target="_blank">
                <Icon /> {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
