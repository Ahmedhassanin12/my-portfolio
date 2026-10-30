import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { AiFillGithub } from "react-icons/ai";
import { HiOutlineCode, HiOutlineExternalLink } from "react-icons/hi";
import { Reveal } from "../../components";
import { projectsData } from "../../data/portfolioData";

import "./work.scss";

/**
 * Individual full-viewport sticky project stage driven by native scroll progress.
 * Inspired by the layered curtain & 3-column editorial showcase reference.
 */
const ProjectStage = ({
  work,
  index,
  total,
  enableScrollMotion,
  onJumpToStage,
}) => {
  const anchorRef = useRef(null);
  const isLast = index === total - 1;

  // Track scroll progress of this project's non-sticky flow anchor:
  // 0.00 -> 0.46 : Stage rises from bottom of viewport (100vh -> 0vh)
  // 0.46 -> 0.54 : Stage pins at top: 0 for a full-viewport dwell beat
  // 0.54 -> 1.00 : Stage remains pinned while the next project curtain slides up over it
  const { scrollYProgress } = useScroll({
    target: anchorRef,
    offset: ["start end", "end start"],
  });

  // Coordinated project visual movement: subtle entrance rise + receding scale when covered
  const rawImageY = useTransform(
    scrollYProgress,
    [0, 0.46, 0.54, 1],
    [index === 0 ? "4%" : "13%", "0%", "0%", isLast ? "0%" : "-5%"]
  );
  const rawImageScale = useTransform(
    scrollYProgress,
    [0, 0.46, 0.54, 1],
    [index === 0 ? 1.03 : 1.08, 1, 1, isLast ? 1 : 0.955]
  );
  const rawInnerImgY = useTransform(
    scrollYProgress,
    [0, 0.46, 1],
    ["-2.5%", "0%", "3.5%"]
  );

  // Coordinated 3-column editorial typography movement (Left: Title, Center: Category/Stack, Right: Description/Actions)
  const rawTitleY = useTransform(
    scrollYProgress,
    [0.04, 0.42, 0.58, 1],
    [index === 0 ? 12 : 38, 0, 0, isLast ? 0 : -14]
  );
  const rawMetaY = useTransform(
    scrollYProgress,
    [0.08, 0.44, 0.58, 1],
    [index === 0 ? 16 : 48, 0, 0, isLast ? 0 : -18]
  );
  const rawDetailsY = useTransform(
    scrollYProgress,
    [0.12, 0.46, 0.58, 1],
    [index === 0 ? 20 : 58, 0, 0, isLast ? 0 : -22]
  );

  const rawContentOpacity = useTransform(
    scrollYProgress,
    [0.05, 0.34, 0.92, 1],
    [index === 0 ? 1 : 0.15, 1, 1, isLast ? 1 : 0.55]
  );

  // Progressive dimming veil while the next slide curtains up over this stage
  const rawCurtainShade = useTransform(
    scrollYProgress,
    [0, 0.62, 0.98],
    [0, 0, isLast ? 0 : 0.48]
  );

  // Live progress bar for the current project dwell/transition window
  const rawStageProgress = useTransform(
    scrollYProgress,
    [0.15, 0.75],
    [0, 1]
  );

  const stackItems = useMemo(() => {
    if (Array.isArray(work.stack) && work.stack.length > 0) {
      return work.stack;
    }
    return (work.tags || []).filter((t) => t && t.trim() !== "" && t !== "All");
  }, [work.stack, work.tags]);

  const formattedIndex = String(index + 1).padStart(2, "0");
  const formattedTotal = String(total).padStart(2, "0");
  const categoryLabel = work.category || "FRONTEND ARCHITECTURE";
  const previewSlug = work.previewSlug || `app.preview/${formattedIndex}`;

  return (
    <>
      {/* Flow scroll sentinel that tracks natural document scroll for this sticky stage */}
      <div
        ref={anchorRef}
        id={`work-stage-anchor-${index}`}
        className={`work__scroll-anchor ${isLast ? "work__scroll-anchor--last" : ""}`}
        aria-hidden="true"
      />

      <article
        className={`work__stage ${isLast ? "work__stage--last" : ""}`}
        style={{ "--stage-index": index + 1 }}
        aria-label={`Project ${index + 1} of ${total}: ${work.title}`}
      >
        {/* Top Stage HUD: Section Index + Interactive Project Switcher */}
        <div className="work__stage-hud">
          <div className="container work__stage-hud-inner">
            <div className="work__hud-meta">
              <span className="work__hud-eyebrow mono-label">
                02 / SELECTED WORK
              </span>
              <span className="work__hud-divider" aria-hidden="true" />
              <span className="work__hud-counter mono-label">
                PROJECT {formattedIndex} / {formattedTotal}
              </span>
            </div>

            <div className="work__hud-nav" role="group" aria-label="Jump to project slide">
              {Array.from({ length: total }).map((_, idx) => {
                const isCurrent = idx === index;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => onJumpToStage(idx)}
                    className={`work__hud-pill ${isCurrent ? "is-current" : ""}`}
                    aria-label={`Jump to project ${idx + 1}`}
                    aria-current={isCurrent ? "step" : undefined}
                  >
                    <span className="work__hud-pill-num">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    {isCurrent && enableScrollMotion && (
                      <motion.span
                        className="work__hud-pill-bar"
                        style={{ scaleX: rawStageProgress }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Center/Right Framed Product Visual with Scroll Parallax */}
        <motion.div
          className="work__stage-visual-wrap"
          style={
            enableScrollMotion
              ? { y: rawImageY, scale: rawImageScale }
              : undefined
          }
        >
          <div className="work__media">
            <div className="work__window-header" aria-hidden="true">
              <div className="work__window-dots">
                <span className="work__window-dot" />
                <span className="work__window-dot" />
                <span className="work__window-dot" />
              </div>
              <span className="work__window-slug mono-label">
                {previewSlug}
              </span>
              <span className="work__featured-badge mono-label">
                {formattedIndex} / {formattedTotal}
              </span>
            </div>

            <div className="work__preview-area">
              {work.isArchitecturePreview || !work.image ? (
                <div className="work__placeholder" aria-label="Architecture Preview">
                  <HiOutlineCode className="work__placeholder-icon" aria-hidden="true" />
                  <p className="work__placeholder-title">{work.title}</p>
                  <span className="work__placeholder-badge mono-label">
                    Architecture Preview
                  </span>
                </div>
              ) : (
                <motion.img
                  src={work.image}
                  alt={`Screenshot of ${work.title}`}
                  loading={index < 2 ? "eager" : "lazy"}
                  decoding="async"
                  className="work__img"
                  style={enableScrollMotion ? { y: rawInnerImgY } : undefined}
                />
              )}
            </div>
          </div>
        </motion.div>

        {/* Atmospheric Contrast Scrim ensuring WCAG AAA readability for the 3-column foreground */}
        <div className="work__stage-scrim" aria-hidden="true" />

        {/* Signature 3-Column Horizontal Editorial Overlay (Left: Title, Center: Category/Stack, Right: Narrative + CTAs) */}
        <div className="work__editorial-band">
          <div className="container work__editorial-grid">
            {/* Column 1: Left — Project Index & Title */}
            <motion.div
              className="work__col work__col--title"
              style={
                enableScrollMotion
                  ? { y: rawTitleY, opacity: rawContentOpacity }
                  : undefined
              }
            >
              <span className="work__index-tag mono-label">
                <span className="work__index-dot" aria-hidden="true" />
                {formattedIndex} — FEATURED
              </span>
              <h3 className="work__title">{work.title}</h3>
            </motion.div>

            {/* Column 2: Center-Left — Discipline Label & Tech Stack */}
            <motion.div
              className="work__col work__col--meta"
              style={
                enableScrollMotion
                  ? { y: rawMetaY, opacity: rawContentOpacity }
                  : undefined
              }
            >
              <p className="work__discipline">{categoryLabel}</p>
              <div className="work__tags" aria-label="Project technologies">
                {stackItems.map((tag) => (
                  <span key={tag} className="chip work__chip">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Column 3: Right — Narrative Description & Direct Actions */}
            <motion.div
              className="work__col work__col--details"
              style={
                enableScrollMotion
                  ? { y: rawDetailsY, opacity: rawContentOpacity }
                  : undefined
              }
            >
              <p className="work__desc">{work.description}</p>

              <div className="work__actions">
                {work.projectLink && (
                  <a
                    href={work.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--primary work__action-btn"
                  >
                    <span>Live Demo</span>
                    <HiOutlineExternalLink aria-hidden="true" />
                  </a>
                )}
                {work.codeLink && (
                  <a
                    href={work.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--ghost work__action-btn"
                  >
                    <AiFillGithub aria-hidden="true" />
                    <span>Source</span>
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Scroll Cue */}
        <div className="work__stage-footer" aria-hidden="true">
          <div className="container work__stage-footer-inner">
            <span className="mono-label work__scroll-hint">
              {isLast ? "END OF SHOWCASE · CONTINUE SCROLLING" : "SCROLL TO REVEAL NEXT PROJECT ↓"}
            </span>
          </div>
        </div>

        {/* Progressive depth shadow overlay when next stage curtains over this slide */}
        {enableScrollMotion && !isLast && (
          <motion.div
            className="work__stage-curtain-shade"
            style={{ opacity: rawCurtainShade }}
            aria-hidden="true"
          />
        )}
      </article>
    </>
  );
};

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const shouldReduceMotion = useReducedMotion();
  const [isDesktopViewport, setIsDesktopViewport] = useState(() => {
    if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
      return true;
    }
    return window.matchMedia("(min-width: 900px)").matches;
  });

  useEffect(() => {
    if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
      return undefined;
    }
    const mediaQuery = window.matchMedia("(min-width: 900px)");
    const handleChange = (event) => setIsDesktopViewport(event.matches);
    setIsDesktopViewport(mediaQuery.matches);

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }
    return undefined;
  }, []);

  const categories = useMemo(() => {
    const tags = new Set(["All"]);
    projectsData.forEach((w) => {
      (w.tags || []).forEach((t) => {
        const clean = t?.trim();
        if (clean && clean.toLowerCase() !== "all") tags.add(clean);
      });
    });
    return Array.from(tags);
  }, []);

  const filteredWorks = useMemo(() => {
    if (activeFilter === "All") return projectsData;
    return projectsData.filter((w) =>
      (w.tags || []).some((t) => t?.trim() === activeFilter)
    );
  }, [activeFilter]);

  const handleJumpToStage = (stageIdx) => {
    const anchor = document.getElementById(`work-stage-anchor-${stageIdx}`);
    if (anchor) {
      anchor.scrollIntoView({ behavior: shouldReduceMotion ? "auto" : "smooth", block: "start" });
    }
  };

  const enableScrollMotion = Boolean(isDesktopViewport && !shouldReduceMotion);

  return (
    <section id="work" className="section work-section" aria-labelledby="work-title">
      <div className="container work__header-wrap">
        <Reveal as="header" className="section__header work__header">
          <p className="section__eyebrow mono-label">
            <span className="section__index">02</span>
            Selected Projects
          </p>
          <h2 id="work-title" className="section__title">
            Production work &amp; <em>interactive systems</em>.
          </h2>
          <p className="section__intro">
            A collection of web applications, client interfaces, and frontend engineering systems built with modern web technologies.
          </p>
        </Reveal>

        {/* Category Filter Pills & Showcase Counter */}
        <div className="work__toolbar">
          <div className="work__filters" role="tablist" aria-label="Filter projects by category">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={activeFilter === category}
                className={`work__filter-btn ${activeFilter === category ? "is-active" : ""}`}
                onClick={() => setActiveFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <p className="work__toolbar-meta mono-label">
            {String(filteredWorks.length).padStart(2, "0")} FEATURED PROJECTS · SCROLL-DRIVEN SHOWCASE
          </p>
        </div>
      </div>

      {/* Full-Viewport Sticky Layered Project Showcase */}
      <div className="work__showcase">
        {filteredWorks.map((work, index) => (
          <ProjectStage
            key={work.id || work.title}
            work={work}
            index={index}
            total={filteredWorks.length}
            enableScrollMotion={enableScrollMotion}
            onJumpToStage={handleJumpToStage}
          />
        ))}
      </div>
    </section>
  );
};

export default Work;
