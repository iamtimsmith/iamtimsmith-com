import { GoogleAnalytics } from "@next/third-parties/google";
import { ThemeProvider } from "next-themes";
import { FC, ReactNode } from "react";
import { siteDescription, siteName } from "../constants";
import { CustomizeProvider } from "../contexts/CustomizeContext";
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

const RootLayoutProps: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <CustomizeProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </CustomizeProvider>
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
      </body>
    </html>
  );
};

export default RootLayoutProps;
