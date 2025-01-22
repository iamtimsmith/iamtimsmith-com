import clsx from "clsx";
import { FC, HTMLAttributes } from "react";
import styles from "./styles.module.css";

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {}

export const Container: FC<ContainerProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div className={clsx([styles.container, className])} {...props}>
      {children}
    </div>
  );
};
