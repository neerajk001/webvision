import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop
 * -------------
 * Ensures the page scroll position resets on route changes.
 * SEO-safe, SSR-safe, and UX-friendly.
 */
export default function ScrollToTop({ behavior = "auto" }) {
  const location = useLocation();

  useEffect(() => {
    // Prevent execution during SSR / pre-render
    if (typeof window === "undefined") return;

    // Handle hash links (#section)
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior });
        return;
      }
    }

    // Default: scroll to top on route change
    window.scrollTo({
      top: 0,
      left: 0,
      behavior,
    });
  }, [location.pathname]); // pathname only (SEO + performance)

  return null;
}
