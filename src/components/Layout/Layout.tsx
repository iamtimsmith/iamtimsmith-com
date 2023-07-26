import { ThemeProvider } from "next-themes";
import { PropsWithChildren } from "react";
import { GlobalFooter, GlobalHeader } from "../../../tina/__generated__/types";
import { EnvironmentIndicator } from "../EnvironmentIndicator";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { SocialMenu } from "../SocialMenu";
import style from "./styles.module.css";

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
    <SocialMenu {...footer} />
  </ThemeProvider>
);
