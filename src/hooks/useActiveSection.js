import { useEffect, useState } from "react";

/**
 * Scroll-spy: returns the id of the section currently crossing the upper
 * part of the viewport. Replaces the per-section NavigationDots.
 */
const useActiveSection = (ids) => {
  const [active, setActive] = useState(null);
  const idsKey = ids.join("|");

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return undefined;

    const elements = idsKey
      .split("|")
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      // A thin band ~35% from the top decides which section is "current".
      { rootMargin: "-35% 0px -60% 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [idsKey]);

  return active;
};

export default useActiveSection;
