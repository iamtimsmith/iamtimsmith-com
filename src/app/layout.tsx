import { GoogleAnalytics } from "@next/third-parties/google";
import { cookies } from "next/headers";
import { CSSProperties, FC, ReactNode } from "react";
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

const defaultSettings = {
  showGifs: true,
  textSize: 16,
  theme: "dark",
};

const RootLayoutProps: FC<RootLayoutProps> = ({ children }) => {
  const storedValue = cookies().get("settings")?.value;
  const settings = storedValue ? JSON.parse(storedValue) : defaultSettings;
  const style = {
    "--font-size-base": `${settings.textSize}px`,
  } as CSSProperties;

  return (
    <html
      lang="en"
      data-theme={settings.theme}
      data-gifs={settings.showGifs}
      style={style}
      suppressHydrationWarning
    >
      <body>
        <CustomizeProvider {...settings}>{children}</CustomizeProvider>
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
      </body>
    </html>
  );
};

export default RootLayoutProps;
