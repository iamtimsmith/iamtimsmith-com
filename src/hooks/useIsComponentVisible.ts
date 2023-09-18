import { useEffect, useRef, useState } from "react";

/**
 * A hook to use for determining open and closed states
 * @param initialValue
 * @returns {ref} A ref to be given to parent object
 * @returns {isComponentVisible} Boolean value to decide whether to show element or not
 * @returns {setIsComponentVisible} Dispatch function to update the value of isComponentVisible
 */
export const useIsComponentVisible = (initialValue: boolean) => {
  const [isComponentVisible, setIsComponentVisible] = useState(initialValue);
  const ref = useRef<HTMLDivElement>(null);

  // Handles clicks outside the parent ref
  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setIsComponentVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return { ref, isComponentVisible, setIsComponentVisible };
};
