import { FC, HTMLAttributes } from "react";
import { useCustomizeContext } from "../../contexts/CustomizeContext";
import { Button } from "../Button";
import { AccessibilityIcon } from "../Icons";
import { Popover } from "../Popover";
import styles from "./styles.module.css";

export interface CustomizerProps extends HTMLAttributes<HTMLDivElement> {}

export const Customizer: FC<CustomizerProps> = ({ className, ...props }) => {
  const { increaseTextSize, decreaseTextSize, resetTextSize } =
    useCustomizeContext();

  return (
    <Popover
      className={styles.customizer}
      position="bottomRight"
      trigger={
        <button
          className={styles.button}
          aria-label="Open the settings panel to customize your reading experience"
        >
          <AccessibilityIcon />
        </button>
      }
    >
      <p>Customize your reading experience</p>
      <div className={styles.field}>
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
      </div>
      <label className={styles.field}>
        <input type="checkbox" /> Test
      </label>
    </Popover>
  );
};
