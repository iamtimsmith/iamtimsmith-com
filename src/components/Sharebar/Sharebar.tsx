import clsx from "clsx";
import { ReactNode, useEffect, useState } from "react";
import { getSharingUrl, Site } from "../../utils/sharing";
import {
  EmailIcon,
  FacebookIcon,
  LinkedinIcon,
  PinterestIcon,
  TwitterIcon,
} from "../Icons";
import styles from "./styles.module.css";

interface SharebarProps {
  post: {
    title: string;
    excerpt: string;
    featuredImage: string;
    _sys: {
      filename: string;
    };
  };
}

const sites: { name: Site; icon: ReactNode }[] = [
  { name: "Facebook", icon: <FacebookIcon /> },
  { name: "Twitter", icon: <TwitterIcon /> },
  { name: "Linkedin", icon: <LinkedinIcon /> },
  { name: "Pinterest", icon: <PinterestIcon /> },
  { name: "Email", icon: <EmailIcon /> },
];

export const Sharebar = ({ post }: SharebarProps) => {
  const [show, setShow] = useState(false);
  const url = `https://www.iamtimsmith.com/blog/${post._sys.filename}`;

  const handleScroll = () =>
    setShow(
      window.scrollY > 200 && window.scrollY < document.body.clientHeight - 1000
    );

  useEffect(() => {
    document.addEventListener(`scroll`, handleScroll);
    return () => document.removeEventListener(`scroll`, handleScroll);
  }, []);

  return (
    <aside className={clsx([styles.sharebar, show && styles.show])}>
      <nav className={styles.sharebarNav}>
        <span className={styles.sharebarLabel}>Share:</span>
        {sites.map((site) => (
          <a
            className={clsx([styles.sharebarButton, styles[site.name]])}
            href={getSharingUrl(
              site.name,
              url,
              post.title,
              post.excerpt,
              post.featuredImage
            )}
            aria-label={`Share to ${site.name}`}
            title={`Share to ${site.name}`}
            target="_blank"
            rel="noopenner nofollow"
            key={site.name}
          >
            {site.icon}
          </a>
        ))}
      </nav>
    </aside>
  );
};
