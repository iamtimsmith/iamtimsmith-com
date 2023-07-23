import NextImage from "next/image";
import { slugify } from "../../utils/slugify";
import style from "./Image.module.css";

export interface ImageProps {
	url?: string;
	alt?: string;
	caption?: string;
}

export const Image = ({ url, caption, alt = "" }: ImageProps) => {
	const id = caption ? slugify(caption) : undefined;

	return (
		<span
			className={style.Image}
			role="figure"
			aria-labelledby={id}
		>
			{url && (
				<NextImage
					className={style.ImageImg}
					src={url}
					alt={alt}
					width={600}
					height={400}
				/>
			)}
			{caption && (
				<span
					id={id}
					className={style.ImageCaption}
				>
					{caption}
				</span>
			)}
		</span>
	);
};
