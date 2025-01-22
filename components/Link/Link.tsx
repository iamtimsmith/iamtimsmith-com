import NextLink from "next/link";
import { PropsWithChildren } from "react";

interface LinkProps extends PropsWithChildren {
  className?: string;
  url?: string;
  title?: string;
}

export const Link = ({
  className,
  url,
  title,
  children,
  ...props
}: LinkProps) => {
  const isInternal = !url?.includes("://");

  if (!url) {
    return (
      <p className={className} {...props}>
        {children}
      </p>
    );
  }

  if (isInternal) {
    return (
      <NextLink className={className} href={url} title={title} {...props}>
        {children}
      </NextLink>
    );
  }

  return (
    <a className={className} href={url} title={title} {...props}>
      {children}
    </a>
  );
};
