import React from "react";
import Reveal from "../Reveal";
import "./Section.scss";

/**
 * Shared section layout: semantic <section>, numbered eyebrow and heading.
 * Replaces the AppWrap/MotionWrap HOCs, which repeated the social rail,
 * navigation dots and a copyright line inside every section.
 */
const Section = ({ id, index, eyebrow, title, intro, className = "", children }) => {
  const headingId = `${id}-title`;

  return (
    <section id={id} className={`section ${className}`.trim()} aria-labelledby={headingId}>
      <div className="container">
        <Reveal as="header" className="section__header">
          <p className="section__eyebrow mono-label">
            {index && <span className="section__index">{index}</span>}
            {eyebrow}
          </p>
          <h2 id={headingId} className="section__title">
            {title}
          </h2>
          {intro && <p className="section__intro">{intro}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  );
};

export default Section;
