import React, { useCallback, useEffect, useRef, useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { navItems, profile } from "../../constants";
import useActiveSection from "../../hooks/useActiveSection";
import "./Navbar.scss";

const sectionIds = navItems.map((item) => item.id);

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef(null);
  const active = useActiveSection(sectionIds);

  const close = useCallback(() => setOpen(false), []);

  // Elevated background once the page has scrolled.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // While the mobile menu is open: lock scroll, close on Escape, and close if
  // the viewport grows to the desktop layout.
  useEffect(() => {
    if (!open) return undefined;

    const toggle = toggleRef.current;
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    const desktop = window.matchMedia("(min-width: 900px)");
    const onResize = (event) => event.matches && setOpen(false);

    document.body.classList.add("is-scroll-locked");
    document.addEventListener("keydown", onKey);
    desktop.addEventListener("change", onResize);

    return () => {
      document.body.classList.remove("is-scroll-locked");
      document.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onResize);
      toggle?.focus({ preventScroll: true });
    };
  }, [open]);

  const renderLinks = (onNavigate) =>
    navItems.map(({ id, label }, index) => (
      <li key={id}>
        <a
          href={`#${id}`}
          className={`navbar__link ${active === id ? "is-active" : ""}`}
          aria-current={active === id ? "location" : undefined}
          onClick={onNavigate}
        >
          <span className="navbar__index" aria-hidden="true">
            {String(index + 1).padStart(2, "0")}
          </span>
          {label}
        </a>
      </li>
    ));

  return (
    <header
      className={`navbar ${scrolled ? "is-elevated" : ""} ${open ? "is-open" : ""}`.trim()}
    >
      <nav className="navbar__inner container" aria-label="Primary">
        <a href="#home" className="navbar__brand" onClick={close}>
          {profile.name}
          <span className="navbar__brand-dot" aria-hidden="true">
            .
          </span>
        </a>

        <ul className="navbar__links">{renderLinks()}</ul>

        <a href="#contact" className="btn btn--ghost navbar__cta">
          Let&apos;s talk
        </a>

        <button
          ref={toggleRef}
          type="button"
          className="navbar__toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <HiX aria-hidden="true" /> : <HiMenuAlt4 aria-hidden="true" />}
        </button>
      </nav>

      <div id="mobile-menu" className={`navbar__panel ${open ? "is-open" : ""}`} hidden={!open}>
        <ul className="navbar__panel-links container">{renderLinks(close)}</ul>
      </div>
    </header>
  );
};

export default Navbar;
