import NextImage from "next/image";
import { slugify } from "../utils/slugify";

export interface ImageProps {
	url?: string;
	alt?: string;
	caption?: string;
}

export const Image = ({ url, caption, alt }: ImageProps) => {
	const id = slugify(caption) || undefined;
	return (
		<span role="figure" aria-labelledby={id}>
			{url && (
				<NextImage
					src={url}
					alt={alt}
					width={800}
					height={400}
					style={{ height: "auto" }}
				/>
			)}
			{caption && (
				<span
					id={id}
					className="figcaption"
					style={{
						display: "block",
						color: "var(--color-grey--50)",
						margin: "-1rem auto 1.5rem",
					}}
				>
					{caption}
				</span>
			)}
		</span>
	);
};
