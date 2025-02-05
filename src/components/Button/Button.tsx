import clsx from "clsx";
import { FC, HTMLAttributes } from "react";
import styles from "./styles.module.css";

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  color?: "primary" | "secondary" | "tertiary";
  size?: "sm" | "md" | "lg";
  variant?: "filled" | "text";
}

export const Button: FC<ButtonProps> = ({
  className,
  children,
  color = "primary",
  size = "md",
  variant = "filled",
  ...props
}) => {
  return (
    <button
      className={clsx([
        styles.button,
        styles[color],
        styles[size],
        styles[variant],
        className,
      ])}
      {...props}
    >
      {children}
    </button>
  );
};
