import { ThemeProvider } from "next-themes";
import { PropsWithChildren } from "react";
import style from "./styles.module.css";
import { GlobalFooter, GlobalHeader } from "../../../tina/__generated__/types";
import { Header } from "../Header";
import { Footer } from "../Footer";
import Head from "next/head";
import { EnvironmentIndicator } from "../EnvironmentIndicator";

interface LayoutProps extends PropsWithChildren {
	header: GlobalHeader;
	footer: GlobalFooter;
}

export const Layout = ({ header, footer, children }: LayoutProps) => (
	<ThemeProvider>
		{process.env.NODE_ENV === "development" && <EnvironmentIndicator />}
		<div className={style.container}>
			<Header {...header} />
			{children}
			<Footer {...footer} />
		</div>
		{/* <SocialMenu /> */}
	</ThemeProvider>
);
