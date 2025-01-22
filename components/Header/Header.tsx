import clsx from "clsx";
import { FC, HTMLAttributes } from "react";
import styles from "./styles.module.css";

export interface HeaderProps extends HTMLAttributes<HTMLDivElement> {}

export const Header: FC<HeaderProps> = ({ className, ...props }) => {
  return (
    <div className={clsx([styles.header, className])} {...props}>
      Header
    </div>
  );
};
