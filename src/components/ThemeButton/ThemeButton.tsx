import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "../Icons";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";

export const ThemeButton = () => {
	const { theme, setTheme } = useTheme();
	const [icon, setIcon] = useState(<SunIcon />);

	const toggleTheme = () => {
		switch (theme) {
			case "system":
			case "light":
				setTheme("dark");
				setIcon(<SunIcon />);
				break;
			case "dark":
				setTheme("light");
				setIcon(<MoonIcon />);
				break;
			default:
				break;
		}
	};

	useEffect(() => {
		setIcon(theme === "light" ? <MoonIcon /> : <SunIcon />);
	}, []);

	return (
		<button className={styles.themeButton} onClick={() => toggleTheme()}>
			{icon}
		</button>
	);
};
