import Link from "next/link";
import styles from "./styles.module.css";
import { tinaField } from "tinacms/dist/react";
import { Post } from "../../../tina/__generated__/types";

interface PostSummaryProps {
	post: Post;
}

export const PostSummary = ({ post }: PostSummaryProps) => {
	const {
		title,
		excerpt,
		_sys: { filename },
	} = post;

	return (
		<article data-tina-field={tinaField(post)}>
			<Link className={styles.blogPostSummaryTitle} href={`/blog/${filename}`}>
				{title}
			</Link>
			<p className={styles.blogPostSummaryExcerpt}>{excerpt}</p>
		</article>
	);
};
