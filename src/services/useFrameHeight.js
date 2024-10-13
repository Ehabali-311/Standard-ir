import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useFrameHeight = () => {
  const location = useLocation();

  useEffect(() => {
    const updateParentHeight = () => {
      const height = document.body.scrollHeight;
      window.parent.postMessage({ height }, "*");
    };

    window.addEventListener("load", updateParentHeight);
    window.addEventListener("resize", updateParentHeight);
    window.addEventListener("scroll", updateParentHeight);

    const observer = new MutationObserver(updateParentHeight);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("load", updateParentHeight);
      window.removeEventListener("resize", updateParentHeight);
      window.removeEventListener("scroll", updateParentHeight);
      observer.disconnect();
    };
  }, [location]);
};
