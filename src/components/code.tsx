import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

export const Code = ({ lang, value }) => (
	<SyntaxHighlighter language={lang}>
		{value}
	</SyntaxHighlighter>
)
