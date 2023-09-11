import { useState } from "react";
import { tinaField } from "tinacms/dist/react";
import { GlobalHeader } from "../../../tina/__generated__/types";
import { SearchIcon } from "../Icons";
import { Link } from "../Link";
import { Modal } from "../Modal";
import { ThemeButton } from "../ThemeButton";
import styles from "./styles.module.css";

export const Header = (props: GlobalHeader) => {
  const { siteName, nav } = props;
  const [searchValue, setSearchValue] = useState("");

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

        <Modal
          trigger={
            <button className={styles.headerButton} aria-label="Search">
              <SearchIcon />
            </button>
          }
        >
          <div className={styles.searchForm}>
            <input
              className={styles.searchInput}
              type="text"
              placeholder="Search..."
              onChange={(e) => setSearchValue(e.target.value)}
              value={searchValue}
            />
            <a
              className={styles.searchButton}
              aria-label="Perform search"
              href={`/search?s=${searchValue}`}
            >
              <SearchIcon />
            </a>
          </div>
        </Modal>
      </div>
    </header>
  );
};
