import React from "react";
import { HiArrowRight, HiOutlineDocumentDownload } from "react-icons/hi";
import { SocialLinks } from "../../components";
import { heroStack, images, profile } from "../../constants";

import "./Hero.scss";

const Hero = () => (
  <section id="home" className="hero" aria-labelledby="hero-title">
    <div className="container hero__inner">
      <div className="hero__content">
        <p className="hero__eyebrow mono-label">{profile.roles.join(" · ")}</p>

        <h1 id="hero-title" className="hero__title">
          Hello, I&apos;m <span className="hero__name">{profile.name}</span>
          <span className="hero__title-dot" aria-hidden="true">
            .
          </span>
        </h1>

        <p className="hero__lead">
          {profile.lead}
        </p>

        <div className="hero__actions">
          <a className="btn btn--primary" href="#work">
            View my work <HiArrowRight aria-hidden="true" />
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
            <p className="mono-label">Works with</p>
            <ul className="hero__stack-list">
              {heroStack.map((tech) => (
                <li key={tech} className="chip">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
          <SocialLinks className="hero__social" />
        </div>
      </div>

      <div className="hero__visual">
        <div className="hero__frame">
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
      </div>
    </div>
  </section>
);

export default Hero;
