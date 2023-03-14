import { Template } from "tinacms"

export const Gif = ({ src, caption, width }: any) => (
	<figure>
		<video src={src} style={{ maxWidth: width }} loop muted playsInline autoPlay />
		{caption && <figcaption>{caption}</figcaption>}
	</figure>
)

export const GifSchema: Template = {
	name: 'Gif',
	label: 'Gif',
	fields: [
		{
			name: 'src',
			label: 'Source',
			type: 'string',
		},
		{
			name: 'caption',
			label: 'Caption',
			type: 'string',
		},
		{
			name: 'width',
			label: 'Width',
			type: 'number'
		}
	]
}
