import { CldImage } from "next-cloudinary";
import { tinaField } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { GlobalAuthor } from "../../../tina/__generated__/types";
import styles from "./styles.module.css";

interface AuthorBioProps {
  author: GlobalAuthor;
  siteName: string;
}

export const AuthorBio = ({ author, siteName }: AuthorBioProps) => (
  <div className={styles.authorBio} data-tina-field={tinaField(author)}>
    <figure className={styles.authorBioImage}>
      <CldImage src={author.portrait} alt={siteName} width={96} height={96} />
    </figure>
    <div className={styles.authorBioContent}>
      <TinaMarkdown content={author.bio} />
    </div>
  </div>
);
