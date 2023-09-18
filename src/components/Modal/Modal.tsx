import {
  cloneElement,
  PropsWithChildren,
  ReactElement,
  useEffect,
  useRef,
} from "react";
import { useIsComponentVisible } from "../../hooks/useIsComponentVisible";
import { CloseIcon } from "../Icons";
import styles from "./styles.module.css";

interface ModalProps extends PropsWithChildren {
  trigger: ReactElement;
}

export const Modal = ({ trigger, children }: ModalProps) => {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useIsComponentVisible(false);
  const dialog = useRef<HTMLDialogElement>();

  const handleOpen = () => {
    setIsComponentVisible(true);
  };

  const handleClose = () => {
    setIsComponentVisible(false);
  };

  useEffect(() => {
    if (isComponentVisible) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [isComponentVisible]);

  return (
    <>
      {cloneElement(trigger, { onClick: handleOpen })}
      <dialog className={styles.modal} ref={dialog}>
        <button className={styles.closeButton} aria-label="Close Modal">
          <CloseIcon className={styles.closeIcon} />
        </button>
        <div ref={ref}>{children}</div>
      </dialog>
    </>
  );
};
