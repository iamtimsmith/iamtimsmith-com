import clsx from "clsx";
import { FC, HTMLAttributes, createElement } from "react";
import { Link } from "../Link";
import styles from "./styles.module.css";

export interface HeadingProps extends HTMLAttributes<HTMLElement> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  href?: string;
}

export const Heading: FC<HeadingProps> = ({
  className,
  children,
  as = "h2",
  href,
  ...props
}) => {
  return createElement(
    as,
    { className: clsx([styles.heading, className]), ...props },
    <Link href={href}>{children}</Link>
  );
};
