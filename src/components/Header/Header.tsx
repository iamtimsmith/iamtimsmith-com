import Link from "next/link";
import { SearchIcon } from "../Icons";
import styles from "./styles.module.css";
import { ThemeButton } from "../ThemeButton";
import { GlobalHeader } from "../../../tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";

export const Header = (props: GlobalHeader) => {
	const { siteName, nav } = props;

	return (
		<header className={styles.header}>
			<Link
				className={styles.headerLogo}
				href="/"
				data-tina-field={tinaField(props, "siteName")}
			>
				{siteName}
			</Link>
			<div className={styles.headerItems}>
				<nav>
					<ul className={styles.headerNav}>
						{nav &&
							nav.map((item: any, i: number) => (
								<li className={styles.headerNavItem} key={`navItem_${i}`}>
									<Link href={item.url} data-tina-field={tinaField(item)}>
										{item?.title}
									</Link>
								</li>
							))}
					</ul>
				</nav>
				<ThemeButton />
				{/*
				** SEARCH IS NOT AVAILABLE IN TINA YET **
				<button className={styles.headerButton}>
					<SearchIcon />
				</button> */}
			</div>
		</header>
	);
};
