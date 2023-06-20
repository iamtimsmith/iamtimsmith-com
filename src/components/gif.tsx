import { Template } from "tinacms";

export interface GifProps {
	src?: string;
	caption?: string;
	maxWidth?: number;
}

export const Gif = ({ src, caption, maxWidth }: GifProps) => (
	<figure>
		<video src={src} style={{ maxWidth }} loop muted playsInline autoPlay />
		{caption && <figcaption>{caption}</figcaption>}
	</figure>
);

export const GifSchema: Template = {
	name: "Gif",
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
