import React, { useEffect, useRef, useState } from "react";

/**
 * Fades/slides children in once when they enter the viewport.
 * CSS-only transition (see `.reveal` in global.scss) — replaces framer-motion
 * `whileInView` animations, and is disabled under prefers-reduced-motion.
 */
const Reveal = ({ as: Tag = "div", delay = 0, className = "", style, children, ...rest }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -5% 0px", threshold: 0.01 }
    );

    observer.observe(node);

    // Failsafe: reveal if not triggered after 1200ms so nothing stays hidden
    const timer = setTimeout(() => {
      setVisible(true);
      observer.disconnect();
    }, 1200);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`.trim()}
      style={delay ? { ...style, "--reveal-delay": `${delay}ms` } : style}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
