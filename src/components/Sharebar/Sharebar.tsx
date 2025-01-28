"use client";
import clsx from "clsx";
import { FC, HTMLAttributes, useEffect, useState } from "react";
import { sharingSites } from "../../constants";
import { getSharingUrl } from "../../helpers/getSharingUrl";
import { SharingSites } from "../../types";
import style from "./styles.module.css";

interface SharebarProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  excerpt: string;
  featuredImage: string;
  slug: string;
}

export const Sharebar: FC<SharebarProps> = ({
  className,
  title,
  excerpt,
  featuredImage,
  slug,
  ...props
}) => {
  const [show, setShow] = useState(false);
  const url = `https://www.iamtimsmith.com/${slug}`;

  const handleScroll = () =>
    setShow(
      window.scrollY > 200 && window.scrollY < document.body.clientHeight - 1000
    );

  useEffect(() => {
    document.addEventListener(`scroll`, handleScroll);
    return () => document.removeEventListener(`scroll`, handleScroll);
  }, []);

  return (
    <aside
      className={clsx([style.sharebar, show && style.show, className])}
      {...props}
    >
      <nav className={style.sharebarNav}>
        <span className={style.sharebarLabel}>Share:</span>
        {sharingSites.map((site) => (
          <a
            className={clsx([
              style.sharebarButton,
              style[site.name.toLowerCase()],
            ])}
            href={getSharingUrl(
              site.name as SharingSites,
              url,
              title,
              excerpt,
              featuredImage
            )}
            aria-label={`Share to ${site.name}`}
            title={`Share to ${site.name}`}
            target="_blank"
            rel="noopenner nofollow"
            key={site.name}
          >
            <site.icon />
          </a>
        ))}
      </nav>
    </aside>
  );
};
