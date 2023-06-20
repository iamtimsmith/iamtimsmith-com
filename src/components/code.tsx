import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import nord from "react-syntax-highlighter/dist/cjs/styles/prism/nord";

export const Code = ({ lang, value }) => (
	<div style={{ fontSize: "0.8rem!important" }}>
		<SyntaxHighlighter language={lang} style={nord}>
			{value}
		</SyntaxHighlighter>
	</div>
);
