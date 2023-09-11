import { cloneElement, PropsWithChildren, ReactElement, useRef } from "react";
import { CloseIcon } from "../Icons";
import styles from "./styles.module.css";

interface ModalProps extends PropsWithChildren {
  trigger: ReactElement;
}

export const Modal = ({ trigger, children }: ModalProps) => {
  const dialog = useRef<HTMLDialogElement>();

  return (
    <>
      {cloneElement(trigger, { onClick: () => dialog.current.showModal() })}
      <dialog className={styles.modal} ref={dialog}>
        <button
          className={styles.closeButton}
          aria-label="Close Modal"
          onClick={() => dialog.current.close()}
        >
          <CloseIcon className={styles.closeIcon} />
        </button>
        {children}
      </dialog>
    </>
  );
};
