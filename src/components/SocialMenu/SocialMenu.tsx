import { tinaField } from "tinacms/dist/react";
import { GlobalFooter } from "../../../tina/__generated__/types";
import { getIcon } from "../../utils/getIcon";
import { BackToTop } from "../BackToTop";
import { Link } from "../Link";
import styles from "./styles.module.css";

export const SocialMenu = ({ socialNav }: GlobalFooter) => (
  <aside className={styles.socialMenuContainer}>
    <nav className={styles.socialMenu}>
      <BackToTop />
      <menu className={styles.socialMenuItems}>
        {socialNav.map((item) => (
          <li key={item.url}>
            <Link
              url={item.url}
              title={item.title}
              data-tina-field={tinaField(item)}
            >
              {getIcon(item.icon)}
            </Link>
          </li>
        ))}
      </menu>
    </nav>
  </aside>
);
