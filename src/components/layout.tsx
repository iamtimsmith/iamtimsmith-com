import Link from "next/link";
import { Environment } from "./environment";

export const Layout = ({ children }) => {
	return (
		<div>
			{process.env.NODE_ENV === "development" && <Environment />}
			<header className="header">
				<Link href="/">Home</Link>
				<Link href="/pages">Pages</Link>
				<Link href="/posts">Posts</Link>
			</header>
			{children}
		</div>
	);
};
