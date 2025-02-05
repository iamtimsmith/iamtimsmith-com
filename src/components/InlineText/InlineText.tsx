import clsx from "clsx";
import { FC, HTMLAttributes } from "react";
import styles from "./styles.module.css";

export interface InlineTextProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "italic" | "bold" | "code";
}

/**
 * This component exists to replace the default <em>, <strong>, and
 * <code> tags in order to make screen reader experience less choppy.
 */
export const InlineText: FC<InlineTextProps> = ({
  className,
  children,
  variant,
  ...props
}) => (
  <span className={clsx([styles[variant], className])} {...props}>
    {children}
  </span>
);
