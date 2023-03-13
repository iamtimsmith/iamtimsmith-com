import Link from "next/link"

export const Layout = ({ children }) => {
	return (
		<div>
			<header className='header'>
				<Link href='/' passHref>Readme</Link>
				<Link href='/posts/hello-world' passHref>Hello World</Link>
			</header>
			{children}
		</div>
	)
}
