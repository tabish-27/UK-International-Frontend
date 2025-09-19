// small helper to scroll to top smoothly on every route change
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop({ smooth = true }) {
  const { pathname } = useLocation();

  useEffect(() => {
    // try/catch because some browsers in devtools may block smooth
    try {
      window.scrollTo({ top: 0, behavior: smooth ? "smooth" : "auto" });
    } catch {
      window.scrollTo(0, 0);
    }
  }, [pathname, smooth]);

  return null;
}
