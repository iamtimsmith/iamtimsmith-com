import { ThemeProvider } from "next-themes";
import { Container } from "../components/Container";
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          {process.env.NODE_ENV === "development" && <EnvironmentBar />}
          <Container>
            <Header />
            {children}
            <Footer />
          </Container>
          <SocialNav />
        </ThemeProvider>
      </body>
    </html>
  );
}
