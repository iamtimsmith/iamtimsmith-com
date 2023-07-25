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
  const isInternal = !url.includes("://");

  return (
    <>
      {(isInternal && (
        <NextLink className={className} href={url} title={title} {...props}>
          {children}
        </NextLink>
      )) || (
        <a
          className={className}
          href={url}
          title={title}
          target="_blank"
          rel="noopener"
          {...props}
        >
          {children}
        </a>
      )}
    </>
  );
};
