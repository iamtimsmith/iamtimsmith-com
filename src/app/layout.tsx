import { ThemeProvider } from "next-themes";
import { FC, ReactNode } from "react";
import { siteDescription, siteName } from "../constants";
import "../styles/style.css";

export const metadata = {
  title: {
    template: `%s | ${siteName}`,
    default: siteName,
  },
  description: siteDescription,
};

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayoutProps: FC<RootLayoutProps> = ({ children }) => (
  <html lang="en" suppressHydrationWarning>
    <body>
      <ThemeProvider>{children}</ThemeProvider>
    </body>
  </html>
);

export default RootLayoutProps;
