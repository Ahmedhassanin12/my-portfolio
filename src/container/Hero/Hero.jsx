import React from "react";
import { HiArrowRight, HiOutlineDocumentDownload } from "react-icons/hi";
import { SocialLinks } from "../../components";
import { heroStack, images, profile } from "../../constants";

import "./Hero.scss";

const Hero = () => (
  <section id="home" className="hero" aria-labelledby="hero-title">
    <div className="container hero__inner">
      <div className="hero__content">
        <div className="hero__status-badge">
          <span className="hero__status-dot" aria-hidden="true" />
          <span className="hero__status-text">Frontend Developer · React &amp; Next.js</span>
        </div>

        <h1 id="hero-title" className="hero__title">
          Hello, I&apos;m <span className="hero__name">{profile.name}</span>
          <span className="hero__dot" aria-hidden="true">
            .
          </span>
        </h1>

        <p className="hero__lead">{profile.lead}</p>

        <div className="hero__actions">
          <a className="btn btn--primary" href="#work">
            View Projects <HiArrowRight aria-hidden="true" />
          </a>
          <a className="btn btn--ghost" href="#contact">
            Get in touch
          </a>
          <a
            className="btn btn--secondary hero__cv-btn"
            href={`${process.env.PUBLIC_URL || ""}/Ahmed-Ibrahim-Frontend-Developer-CV.pdf`}
            download="Ahmed-Ibrahim-Frontend-Developer-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <HiOutlineDocumentDownload aria-hidden="true" /> Download CV
          </a>
        </div>

        <div className="hero__meta">
          <div className="hero__stack">
            <span className="mono-label">Core Technologies</span>
            <ul className="hero__stack-list" aria-label="Core technologies list">
              {heroStack.map((tech) => (
                <li key={tech} className="chip">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
          <div className="hero__social-wrap">
            <span className="mono-label">Connect</span>
            <SocialLinks className="hero__social" />
          </div>
        </div>
      </div>

      <div className="hero__visual">
        <div className="hero__showcase-card">
          <div className="hero__card-topbar">
            <div className="hero__card-dots" aria-hidden="true">
              <span className="hero__card-dot" />
              <span className="hero__card-dot" />
              <span className="hero__card-dot" />
            </div>
            <span className="hero__card-label mono-label">{profile.location}</span>
          </div>

          <div className="hero__portrait-frame">
            <img
              className="hero__portrait"
              src={images.profile}
              alt={`Portrait of ${profile.name}`}
              width="960"
              height="1200"
              fetchpriority="high"
              decoding="async"
            />
          </div>

          <div className="hero__card-footer">
            <div className="hero__badge-indicator">
              <span className="hero__badge-bullet" aria-hidden="true" />
              <span className="hero__badge-title">Frontend Engineer</span>
            </div>
            <span className="hero__badge-sub mono-label">3+ Years Building Production Apps</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
