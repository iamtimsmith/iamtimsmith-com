import { FC, HTMLAttributes } from "react";
import { EnvironmentBar } from "../EnvironmentBar";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { SocialNav } from "../SocialNav";

export interface LayoutProps extends HTMLAttributes<HTMLDivElement> {
  content?: string;
}

export const Layout: FC<LayoutProps> = ({ children, content, ...props }) => {
  return (
    <div {...props}>
      {process.env.NODE_ENV === "development" && (
        <EnvironmentBar content={content} />
      )}
      <Header />
      <main>{children}</main>
      <Footer />
      <SocialNav />
    </div>
  );
};
