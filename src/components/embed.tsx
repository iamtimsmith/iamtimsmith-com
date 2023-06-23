import { Template } from "tinacms";

interface EmbedProps {
	html?: string;
}

export const Embed = ({ html }: EmbedProps) => (
	<div dangerouslySetInnerHTML={{ __html: html }} />
);

export const EmbedSchema: Template = {
	name: "embed",
	label: "Embed Code",
	fields: [
		{
			name: "html",
			label: "HTML",
			type: "string",
			ui: {
				component: "textarea",
			},
		},
	],
};
