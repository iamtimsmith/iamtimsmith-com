import clsx from "clsx";
import style from "./Gif.module.css";
import { Template } from "tinacms";

export interface GifProps {
	src: string;
	caption?: string;
	maxWidth?: number;
}

export const Gif = ({ src, caption, maxWidth = 400 }: GifProps | any) => (
	<figure className={clsx([style.Gif])} style={{ maxWidth }}>
		<video src={src} playsInline autoPlay muted loop />
		{caption && <figcaption>{caption}</figcaption>}
	</figure>
);

export const GifSchema: Template = {
	name: "gif",
	label: "Gif",
	fields: [
		{
			name: "src",
			label: "Source",
			type: "string",
		},
		{
			name: "caption",
			label: "Caption",
			type: "string",
		},
		{
			name: "width",
			label: "Width",
			type: "number",
		},
	],
};
