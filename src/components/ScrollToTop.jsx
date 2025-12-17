import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop({ behavior = "auto" }) {
  const { pathname } = useLocation();

  useEffect(() => {
    // Jump to top on route change (also covers page refreshes where pathname is set)
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior });
    }
  }, [pathname, behavior]);

  return null;
}
