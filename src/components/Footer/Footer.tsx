import clsx from "clsx";
import { FC, HTMLAttributes } from "react";
import { socialNav } from "../../constants";
import { getIcon } from "../../helpers/getIcon";
import { Link } from "../Link";
import styles from "./styles.module.css";

export interface FooterProps extends HTMLAttributes<HTMLDivElement> {}

export const Footer: FC<FooterProps> = ({ className, ...props }) => {
  return (
    <footer className={clsx([styles.footer, className])} {...props}>
      <nav>
        <ul className={styles.footerSocials}>
          {socialNav &&
            socialNav?.map((social) => (
              <li key={social.title}>
                <Link
                  className={styles.footerSocialLink}
                  url={social.url || ""}
                  aria-label={social.title || ""}
                >
                  {getIcon(social?.icon || "")}
                </Link>
              </li>
            ))}
        </ul>
      </nav>
    </footer>
  );
};
