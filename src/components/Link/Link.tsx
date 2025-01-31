import NextLink from "next/link";
import { HTMLAttributes } from "react";

interface LinkProps extends HTMLAttributes<HTMLAnchorElement> {
  href?: string;
}

export const Link = ({
  className,
  href,
  title,
  children,
  ...props
}: LinkProps) => {
  const isInternal = !href?.includes("://");

  if (!href) {
    return (
      <span className={className} {...props}>
        {children}
      </span>
    );
  }

  if (isInternal) {
    return (
      <NextLink className={className} href={href} title={title} {...props}>
        <span>{children}</span>
      </NextLink>
    );
  }

  return (
    <a className={className} href={href} title={title} {...props}>
      <span>{children}</span>
    </a>
  );
};
