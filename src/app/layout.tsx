import { ThemeProvider } from "next-themes";
import { FC, ReactNode } from "react";
import { EnvironmentBar } from "../components/EnvironmentBar";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { SocialNav } from "../components/SocialNav";
import { favicon, siteDescription, siteName } from "../constants";
import "../styles/style.css";

export const metadata = {
  title: {
    template: `%s | ${siteName}`,
    default: siteName,
  },
  description: siteDescription,
  icons: {
    icon: favicon,
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayoutProps: FC<RootLayoutProps> = ({ children }) => (
  <html lang="en" suppressHydrationWarning>
    <body>
      <ThemeProvider>
        {process.env.NODE_ENV === "development" && <EnvironmentBar />}
        <Header />
        {children}
        <Footer />
        <SocialNav />
      </ThemeProvider>
    </body>
  </html>
);

export default RootLayoutProps;
