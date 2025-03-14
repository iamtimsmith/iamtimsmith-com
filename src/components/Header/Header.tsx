"use client";
import { FC, HTMLAttributes, useState } from "react";
import { mainNav, siteName } from "../../constants";
import { Container } from "../Container";
import { Link } from "../Link";
import { ThemeButton } from "../ThemeButton";
import styles from "./styles.module.css";

export interface HeaderProps extends HTMLAttributes<HTMLDivElement> {}

export const Header: FC<HeaderProps> = ({ className, ...props }) => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <Container variant="wide">
      <header className={styles.header} {...props}>
        <Link className={styles.headerLogo} href="/">
          {siteName}
        </Link>
        <div className={styles.headerItems}>
          <nav aria-label="Main navigation">
            <ul className={styles.headerNav}>
              {mainNav.map(
                (item: { url: string; title: string }, i: number) => (
                  <li className={styles.headerNavItem} key={`navItem_${i}`}>
                    <Link href={item.url}>{item?.title}</Link>
                  </li>
                )
              )}
            </ul>
          </nav>
          <ThemeButton />

          {/* <Modal
          trigger={
            <button className={styles.headerButton} aria-label="Search">
              <SearchIcon />
            </button>
          }
        >
          <form
            className={styles.searchForm}
            role="search"
            method="get"
            action={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/search`}
          >
            <input
              className={styles.searchInput}
              type="text"
              name="s"
              placeholder="Search..."
              onChange={(e) => setSearchValue(e.target.value)}
              value={searchValue}
              autoFocus
            />
            <button className={styles.searchButton} aria-label="Perform Search">
              <SearchIcon />
            </button>
          </form>
        </Modal> */}
        </div>
      </header>
    </Container>
  );
};
