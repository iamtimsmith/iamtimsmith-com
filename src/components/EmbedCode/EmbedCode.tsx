import { Template } from "tinacms";
import style from "./EmbedCode.module.css";

interface EmbedProps {
	html?: string;
}

export const EmbedCode = ({ html = "" }: EmbedProps) => (
	<div className={style.EmbedCode} dangerouslySetInnerHTML={{ __html: html }} />
);

export const EmbedCodeSchema: Template = {
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
