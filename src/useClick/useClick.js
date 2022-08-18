import { useEffect, useRef } from "react";

export const useClick = (onClick) => {
  const element = useRef();
  useEffect(() => {
    if (typeof onClick !== "function") {
      return;
    }
    if (element.current) {
      const { current } = element;
      current.addEventListener("click", onClick);
      return () => {
        current.removeEventListener("click", onClick);
      };
    }
  }, []);
  return typeof onClick !== "function" ? undefined : element;
};
