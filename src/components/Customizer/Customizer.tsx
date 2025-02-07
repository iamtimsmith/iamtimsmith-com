import { FC, HTMLAttributes } from "react";
import { useCustomizeContext } from "../../contexts/CustomizeContext";
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
    showGifs,
    toggleGifs,
  } = useCustomizeContext();

  return (
    <Popover
      className={styles.customizer}
      position="bottomRight"
      maxWidth="12rem"
      trigger={
        <button
          className={styles.button}
          aria-label="Open the accessibility settings"
        >
          <AccessibilityIcon />
        </button>
      }
      {...props}
    >
      <p>Customize your reading experience</p>
      <fieldset className={styles.field}>
        <legend>Adjust text size</legend>
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
      </fieldset>
      <label className={styles.field}>
        <input type="checkbox" checked={showGifs} onChange={toggleGifs} /> Show
        Gifs
      </label>
    </Popover>
  );
};
