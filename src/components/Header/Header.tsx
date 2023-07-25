import { tinaField } from "tinacms/dist/react";
import { GlobalHeader } from "../../../tina/__generated__/types";
import { SearchIcon } from "../Icons";
import { Link } from "../Link";
import { ThemeButton } from "../ThemeButton";
import styles from "./styles.module.css";

export const Header = (props: GlobalHeader) => {
  const { siteName, nav } = props;

  return (
    <header className={styles.header}>
      <Link
        className={styles.headerLogo}
        url="/"
        data-tina-field={tinaField(props, "siteName")}
      >
        {siteName}
      </Link>
      <div className={styles.headerItems}>
        <nav>
          <ul className={styles.headerNav}>
            {nav &&
              nav.map((item: { url: string; title: string }, i: number) => (
                <li className={styles.headerNavItem} key={`navItem_${i}`}>
                  <Link url={item.url} data-tina-field={tinaField(item)}>
                    {item?.title}
                  </Link>
                </li>
              ))}
          </ul>
        </nav>
        <ThemeButton />

        {/* ** SEARCH IS NOT AVAILABLE IN TINA YET ** */}
        <button className={styles.headerButton} aria-label="Search">
          <SearchIcon />
        </button>
      </div>
    </header>
  );
};
