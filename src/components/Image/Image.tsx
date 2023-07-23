import NextImage from "next/image";
import { slugify } from "../../utils/slugify";
import styles from "./styles.module.css";

export interface ImageProps {
	url?: string;
	alt?: string;
	caption?: string;
}

export const Image = ({ url, caption, alt = "" }: ImageProps) => {
	const id = caption ? slugify(caption) : undefined;

	return (
		<span className={styles.image} role="figure" aria-labelledby={id}>
			{url && (
				<NextImage
					className={styles.imageImg}
					src={url}
					alt={alt}
					width={600}
					height={400}
				/>
			)}
			{caption && (
				<span id={id} className={styles.imageCaption}>
					{caption}
				</span>
			)}
		</span>
	);
};
