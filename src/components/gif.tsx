import { Template } from "tinacms";

export interface GifProps {
	src?: string;
	caption?: string;
	maxWidth?: number;
}

export const Gif = ({ src, caption, maxWidth }: GifProps) => (
	<figure style={{ maxWidth }}>
		<video
			src={src}
			style={{ width: "100%" }}
			loop
			muted
			playsInline
			autoPlay
		/>
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
