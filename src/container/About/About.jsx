import React from "react";
import { Reveal, Section } from "../../components";
import { aboutData } from "../../data/portfolioData";

import "./about.scss";

const About = () => {
  return (
    <Section
      id="about"
      index="01"
      eyebrow="About Me"
      title={
        <>
          Engineering principles for <em>scalable products</em>.
        </>
      }
      intro="I specialize in creating clean, responsive, and performance-focused digital experiences with modern web technologies."
    >
      <div className="about__grid">
        {aboutData.map((about, index) => (
          <Reveal
            as="article"
            key={about.id || about.title}
            className="about__card"
            delay={index * 90}
          >
            <div className="about__media">
              <div className="about__media-topbar" aria-hidden="true">
                <span className="about__dot" />
                <span className="about__dot" />
                <span className="about__dot" />
                <span className="about__media-tag mono-label">
                  MODULE 0{index + 1}
                </span>
              </div>
              <img
                src={about.image}
                alt={about.title}
                width="1200"
                height="900"
                loading="lazy"
                decoding="async"
                className="about__img"
              />
            </div>
            <div className="about__body">
              <div className="about__header-row">
                <span className="about__num mono-label">0{index + 1}</span>
                <h3 className="about__card-title">{about.title}</h3>
              </div>
              <p className="about__card-desc">{about.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
};

export default About;
