import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import nord from "react-syntax-highlighter/dist/cjs/styles/prism/nord";
import styles from "./styles.module.css";

interface CodeBlockProps {
	lang?: string;
	value?: string | string[];
}

export const CodeBlock = ({ lang, value }: CodeBlockProps) => {
	return (
		<div className={styles.codeBlock}>
			<SyntaxHighlighter language={lang} style={nord}>
				{value || ""}
			</SyntaxHighlighter>
		</div>
	);
};
