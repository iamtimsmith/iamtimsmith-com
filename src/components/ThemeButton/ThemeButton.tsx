import clsx from "clsx";
import { FC, HTMLAttributes } from "react";
import { useCustomizeContext } from "../../contexts/CustomizeContext";
import { toggleTheme } from "../../helpers/toggleTheme";
import { MoonIcon, SunIcon } from "../Icons";
import styles from "./styles.module.css";

interface ThemeButtonProps extends HTMLAttributes<HTMLButtonElement> {}

export const ThemeButton: FC<ThemeButtonProps> = ({ className, ...props }) => {
  const { theme, setTheme } = useCustomizeContext();

  const handleThemeChange = () => {
    const newTheme = toggleTheme(theme);
    setTheme(newTheme);
  };

  return (
    <button
      className={clsx([styles.themeButton])}
      onClick={handleThemeChange}
      aria-label="Toggle website theme"
      {...props}
    >
      <MoonIcon className={styles.moon} />
      <SunIcon className={styles.sun} />
    </button>
  );
};
