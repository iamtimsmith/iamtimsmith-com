import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

export const Code = ({ lang, value }) => (
	<div style={{ fontSize: '0.8rem!important' }}>
		<SyntaxHighlighter language={lang}>
			{value}
		</SyntaxHighlighter>
	</div>
)
