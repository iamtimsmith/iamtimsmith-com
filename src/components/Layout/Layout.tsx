import { FC, HTMLAttributes } from "react";
import { CustomizeProvider } from "../../contexts/CustomizeContext";
import { BackToTop } from "../BackToTop";
import { EnvironmentBar } from "../EnvironmentBar";
import { Footer } from "../Footer";
import { Header } from "../Header";

export interface LayoutProps extends HTMLAttributes<HTMLDivElement> {
  content?: string;
}

export const Layout: FC<LayoutProps> = ({ children, content, ...props }) => (
  <div {...props}>
    <Header />
    <CustomizeProvider>
      <main>
        {children}
        <BackToTop />
      </main>
    </CustomizeProvider>
    <Footer />
    {process.env.NODE_ENV === "development" && (
      <EnvironmentBar content={content} />
    )}
  </div>
);
