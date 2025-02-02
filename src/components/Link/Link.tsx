import NextLink from "next/link";
import { HTMLAttributes } from "react";

interface LinkProps extends HTMLAttributes<HTMLAnchorElement> {
  href?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
}

export const Link = ({
  className,
  href,
  title,
  target,
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
    <a
      className={className}
      href={href}
      title={title}
      target={target}
      {...props}
    >
      <span>{children}</span>
    </a>
  );
};
