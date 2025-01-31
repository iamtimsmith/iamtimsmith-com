import clsx from "clsx";
import { FC, HTMLAttributes } from "react";
import styles from "./styles.module.css";

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "wide";
}

export const Container: FC<ContainerProps> = ({
  className,
  children,
  variant = "default",
  ...props
}) => {
  return (
    <div
      className={clsx([styles.container, styles[variant], className])}
      {...props}
    >
      {children}
    </div>
  );
};
