import { FC, HTMLAttributes } from "react";

export interface LayoutProps extends HTMLAttributes<HTMLDivElement> {}

export const Layout: FC<LayoutProps> = ({ children, ...props }) => {
  return (
    <div {...props}>
      <h1>Layout</h1>
      <main>{children}</main>
    </div>
  );
};
