import clsx from "clsx";
import { FC, HTMLAttributes } from "react";
import { authorBio, authorPortrait, siteName } from "../../constants";
import { Content } from "../Content";
import styles from "./styles.module.css";

export interface AuthorProps extends HTMLAttributes<HTMLDivElement> {}

export const Author: FC<AuthorProps> = ({ className, ...props }) => {
  const portraitSize = 128;

  return (
    <div className={clsx([styles.author, className])} {...props}>
      <figure className={styles.authorPortrait}>
        <img
          src={authorPortrait}
          alt={siteName}
          width={portraitSize}
          height={portraitSize}
        />
        {/* <CldImage src={authorPortrait} alt={siteName} width={96} height={96} /> */}
      </figure>
      <Content>{authorBio}</Content>
    </div>
  );
};
