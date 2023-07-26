import clsx from "clsx";
import { useEffect, useState } from "react";
import style from "./styles.module.css";

export const BackToTop = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(window.scrollY > 50);
  const handleClick = () => window[`scrollTo`]({ top: 0, behavior: `smooth` });

  useEffect(() => {
    document.addEventListener(`scroll`, handleShow);
    return () => document.removeEventListener(`scroll`, handleShow);
  }, []);

  return (
    <button
      className={clsx([style.backToTop, show && style.show])}
      onClick={handleClick}
      aria-label="Go back to the top of the page"
    >
      ↑
    </button>
  );
};
