import React, { useMemo, useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { HiOutlineCode, HiOutlineExternalLink } from "react-icons/hi";
import { Reveal, Section } from "../../components";
import { projectsData } from "../../data/portfolioData";

import "./work.scss";

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("All");

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

  return (
    <Section
      id="work"
      index="02"
      eyebrow="Selected Projects"
      title={
        <>
          Production work & <em>interactive systems</em>.
        </>
      }
      intro="A collection of web applications, client interfaces, and frontend engineering systems built with modern web technologies."
    >
      {/* Category Filter Pills */}
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

      {/* Projects Grid with Featured Editorial Treatment */}
      <div className="work__grid">
        {filteredWorks.map((work, index) => {
          const tags = (work.tags || []).filter((t) => t && t.trim() !== "" && t !== "All");
          const isFeatured = activeFilter === "All" && index === 0;

          return (
            <Reveal
              as="article"
              key={work.id || work.title}
              className={`work__card ${isFeatured ? "work__card--featured" : ""}`}
              delay={index * 70}
            >
              <div className="work__media">
                <div className="work__window-header" aria-hidden="true">
                  <div className="work__window-dots">
                    <span className="work__window-dot" />
                    <span className="work__window-dot" />
                    <span className="work__window-dot" />
                  </div>
                  <span className="work__window-slug mono-label" aria-hidden="true">
                    app.preview/0{index + 1}
                  </span>
                  {isFeatured && (
                    <span className="work__featured-badge mono-label">
                      Featured Project
                    </span>
                  )}
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
                    <img
                      src={work.image}
                      alt={`Screenshot of ${work.title}`}
                      loading={index < 2 ? "eager" : "lazy"}
                      decoding="async"
                      className="work__img"
                    />
                  )}
                </div>
              </div>

              <div className="work__content">
                <div className="work__tags" aria-label="Project technologies">
                  {tags.map((tag) => (
                    <span key={tag} className="chip">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="work__title">{work.title}</h3>
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
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
};

export default Work;
