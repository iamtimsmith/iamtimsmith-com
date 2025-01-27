import clsx from "clsx";
import { FC, HTMLAttributes } from "react";
import { socialNav } from "../../constants";
import { Link } from "../Link";
import styles from "./styles.module.css";

export interface FooterProps extends HTMLAttributes<HTMLDivElement> {}

export const Footer: FC<FooterProps> = ({ className, ...props }) => {
  return (
    <footer className={clsx([styles.footer, className])} {...props}>
      <nav aria-label="Social links">
        <ul className={styles.footerSocials}>
          {socialNav &&
            socialNav?.map(({ icon: Icon, ...social }) => (
              <li key={social.title}>
                <Link
                  className={styles.footerSocialLink}
                  url={social.url || ""}
                  aria-label={social.title || ""}
                >
                  <Icon />
                </Link>
              </li>
            ))}
        </ul>
      </nav>
    </footer>
  );
};
