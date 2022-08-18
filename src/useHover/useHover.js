import { useEffect, useRef } from "react";

export const useHover = (onHover) => {
  const element = useRef();
  useEffect(() => {
    if (typeof onHover !== "function") {
      return;
    }
    if (!element.current) {
      return;
    }
    const elementCurrent = element.current;
    elementCurrent.addEventListener("mouseenter", onHover);
    return () => {
      elementCurrent.removeEventListener("mouseenter", onHover);
    };
  }, []);
  return typeof onHover !== "function" ? undefined : element;
};
