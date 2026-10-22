import React, { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { Section } from "../../components";

import "./Testimonial.scss";

const Testimonial = ({ testimonials = [], brands = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  const current = testimonials && testimonials.length > 0 ? testimonials[currentIndex] : null;

  if (!current && (!brands || brands.length === 0)) return null;

  return (
    <Section
      id="testimonials"
      index="04"
      eyebrow="Testimonials"
      title={
        <>
          Client <em>feedback</em> & trust.
        </>
      }
      intro="What clients and collaborators say about working together."
    >
      {current && (
        <div className="testimonial__container">
          <div className="testimonial__card">
            {current.image && (
              <div className="testimonial__avatar-wrapper">
                <img
                  src={current.image}
                  alt={current.name}
                  className="testimonial__avatar"
                />
              </div>
            )}
            <div className="testimonial__content">
              <blockquote className="testimonial__quote">
                &ldquo;{current.feedback}&rdquo;
              </blockquote>
              <div className="testimonial__author">
                <cite className="testimonial__author-name">{current.name}</cite>
                <span className="testimonial__author-company">{current.company}</span>
              </div>
            </div>
          </div>

          {testimonials.length > 1 && (
            <div className="testimonial__controls">
              <button
                type="button"
                className="testimonial__ctrl-btn"
                onClick={() =>
                  handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)
                }
                aria-label="Previous testimonial"
              >
                <HiChevronLeft aria-hidden="true" />
              </button>
              <span className="mono-label testimonial__page-indicator">
                {currentIndex + 1} / {testimonials.length}
              </span>
              <button
                type="button"
                className="testimonial__ctrl-btn"
                onClick={() =>
                  handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)
                }
                aria-label="Next testimonial"
              >
                <HiChevronRight aria-hidden="true" />
              </button>
            </div>
          )}
        </div>
      )}

      {brands && brands.length > 0 && (
        <div className="testimonial__brands">
          {brands.map((brand) => (
            <div key={brand.id || brand.name} className="testimonial__brand-item">
              <img
                src={brand.image}
                alt={brand.name}
                className="testimonial__brand-img"
              />
            </div>
          ))}
        </div>
      )}
    </Section>
  );
};

export default Testimonial;
