import React from "react";
import { Reveal, Section } from "../../components";
import { TechIcon } from "../../components/TechIcons";
import { experiencesData, skillsData } from "../../data/portfolioData";

import "./skills.scss";

const Skills = () => {
  return (
    <Section
      id="skills"
      index="03"
      eyebrow="Skills & Experience"
      title={
        <>
          Technologies & <em>career journey</em>.
        </>
      }
      intro="A comprehensive overview of the modern frontend toolkit I utilize and my professional background."
    >
      <div className="skills__layout">
        {/* Left Column: Skills Grid */}
        <div className="skills__section">
          <h3 className="skills__column-title mono-label">Technical Toolkit</h3>

          <div className="skills__grid">
            {skillsData.map((skill, index) => (
              <Reveal
                key={skill.name}
                className="skills__item"
                delay={index * 40}
              >
                <div className="skills__icon-wrapper">
                  <TechIcon name={skill.name} className="skills__icon" />
                </div>
                <span className="skills__name">{skill.name}</span>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Right Column: Experience Timeline */}
        <div className="skills__section">
          <h3 className="skills__column-title mono-label">Work Experience</h3>

          <div className="skills__timeline">
            {experiencesData.map((exp, expIdx) => (
              <div key={exp.year + expIdx} className="skills__timeline-group">
                <div className="skills__timeline-year">
                  <span className="skills__year-badge mono-label">{exp.year}</span>
                </div>

                <div className="skills__timeline-cards">
                  {(exp.works || []).map((work, workIdx) => (
                    <Reveal
                      key={work.id || work.name + workIdx}
                      className="skills__exp-card"
                      delay={workIdx * 100}
                    >
                      <div className="skills__exp-header">
                        <div className="skills__exp-title-row">
                          <h4 className="skills__exp-role">{work.name}</h4>
                          {work.period && (
                            <span className="skills__exp-period mono-label">{work.period}</span>
                          )}
                        </div>
                        <div className="skills__exp-meta">
                          <span className="skills__exp-company">{work.company}</span>
                          {work.location && (
                            <span className="skills__exp-location">• {work.location}</span>
                          )}
                        </div>
                      </div>
                      {work.desc && (
                        <p className="skills__exp-desc">{work.desc}</p>
                      )}
                      {work.highlights && work.highlights.length > 0 && (
                        <ul className="skills__exp-highlights">
                          {work.highlights.map((hl, hlIdx) => (
                            <li key={hlIdx} className="skills__exp-highlight-item">
                              {hl}
                            </li>
                          ))}
                        </ul>
                      )}
                    </Reveal>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Skills;
