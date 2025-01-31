import clsx from "clsx";
import { FC, HTMLAttributes } from "react";
import { socialNav } from "../../constants";
import { BackToTop } from "../BackToTop";
import { Link } from "../Link";
import styles from "./styles.module.css";

interface SocialNavProps extends HTMLAttributes<HTMLDivElement> {}

export const SocialNav: FC<SocialNavProps> = ({ className, ...props }) => (
  <aside className={clsx([styles.SocialMenuContainer, className])} {...props}>
    <nav className={styles.SocialMenu}>
      <BackToTop />
      <menu className={styles.SocialMenuItems}>
        {socialNav.map((item) => (
          <li key={item.url}>
            <Link href={item.url} aria-label={item.title}>
              <item.icon />
            </Link>
          </li>
        ))}
      </menu>
    </nav>
  </aside>
);
