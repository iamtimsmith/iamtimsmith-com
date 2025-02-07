"use client";
import Cookies from "js-cookie";
import { HTMLAttributes } from "react";
import { envSites } from "../../constants";
import { getWordCount } from "../../helpers/getWordCount";
import { Link } from "../Link";
import styles from "./styles.module.css";

interface EnvironmentBarProps extends HTMLAttributes<HTMLDivElement> {
  content?: string;
}

export const EnvironmentBar = ({ content, ...props }: EnvironmentBarProps) => {
  const nodeEnv = process.env.NODE_ENV;
  const wordCount = getWordCount(content);

  const clearSettings = () => Cookies.remove("settings");

  return (
    <div className={styles.environmentBar} {...props}>
      <div className={styles.container}>
        <p>
          Environment: <span className={styles.data}>{nodeEnv}</span>
        </p>
        {content && (
          <p>
            Length:{" "}
            <span className={styles.data}>
              {wordCount} {wordCount === 1 ? "word" : "words"}
            </span>
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
        <button className={styles.button} onClick={clearSettings}>
          Clear Settings
        </button>
      </div>
    </div>
  );
};
