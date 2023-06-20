import Link from "next/link";

export const Layout = ({ children }) => {
	return (
		<div>
			<header className="header">
				<Link href="/">Home</Link>
				<Link href="/pages">Pages</Link>
				<Link href="/posts">Posts</Link>
			</header>
			{children}
		</div>
	);
};
