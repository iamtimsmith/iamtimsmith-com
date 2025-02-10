"use client";
import { FC, HTMLAttributes } from "react";
import { useCustomizeContext } from "../../contexts/CustomizeContext";
import { Theme } from "../../types";
import { Button } from "../Button";
import { AccessibilityIcon } from "../Icons";
import { Popover } from "../Popover";
import styles from "./styles.module.css";

export interface CustomizerProps extends HTMLAttributes<HTMLDivElement> {}

export const Customizer: FC<CustomizerProps> = ({ className, ...props }) => {
  const {
    increaseTextSize,
    decreaseTextSize,
    resetTextSize,
    setTheme,
    showGifs,
    theme,
    toggleGifs,
  } = useCustomizeContext();

  return (
    <Popover
      className={styles.customizer}
      position="bottomRight"
      maxWidth="15rem"
      trigger={
        <Button
          className={styles.button}
          size="lg"
          variant="text"
          aria-label="Open the accessibility settings"
        >
          <AccessibilityIcon />
        </Button>
      }
      {...props}
    >
      <p>Customize your reading experience</p>
      <div className={styles.field}>
        <label htmlFor="theme" aria-hidden>
          Theme
        </label>
        <select
          id="theme"
          value={theme}
          aria-label="Select theme"
          onChange={(e) => setTheme(e.target.value as Theme)}
        >
          <option value="dark">Dark</option>
          <option value="light">Light</option>
        </select>
      </div>
      {/* <fieldset className={styles.field}>
        <legend aria-hidden>Adjust text size</legend>
        <Button
          size="sm"
          onClick={increaseTextSize}
          aria-label="Increase text size"
        >
          +
        </Button>
        <Button
          color="secondary"
          size="sm"
          onClick={decreaseTextSize}
          aria-label="Decrease text size"
        >
          -
        </Button>
        <Button
          color="tertiary"
          size="sm"
          variant="text"
          onClick={resetTextSize}
          aria-label="Reset text size"
        >
          Reset
        </Button>
      </fieldset> */}
      <label className={styles.field}>
        <input type="checkbox" checked={showGifs} onChange={toggleGifs} /> Show
        Gifs
      </label>
    </Popover>
  );
};
