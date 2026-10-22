import React, { useState } from "react";
import { HiOutlineCheckCircle, HiOutlineDocumentText, HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { Section } from "../../components";
import { profile } from "../../constants";

import "./Contact.scss";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChange = (e) => {
    const { name: fieldName, value } = e.target;
    setFormData((prev) => ({ ...prev, [fieldName]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    setLoading(true);

    // Client-side submission handling (can easily be hooked to Formspree, EmailJS, or API)
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 500);
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitted(false);
  };

  return (
    <Section
      id="contact"
      index="04"
      eyebrow="Contact"
      title={
        <>
          Let&apos;s build something <em>together</em>.
        </>
      }
      intro="Whether you have an upcoming project, freelance opportunity, or just want to chat about tech, feel free to reach out."
    >
      <div className="contact__layout">
        {/* Contact Info Cards */}
        <div className="contact__cards">
          <a
            href={`mailto:${profile.email}`}
            className="contact__card"
            aria-label={`Send email to ${profile.email}`}
          >
            <div className="contact__card-icon">
              <HiOutlineMail aria-hidden="true" />
            </div>
            <div className="contact__card-info">
              <span className="mono-label">Email</span>
              <span className="contact__card-value">{profile.email}</span>
            </div>
          </a>

          <a
            href={`tel:${profile.phone}`}
            className="contact__card"
            aria-label={`Call ${profile.phone}`}
          >
            <div className="contact__card-icon">
              <HiOutlinePhone aria-hidden="true" />
            </div>
            <div className="contact__card-info">
              <span className="mono-label">Phone</span>
              <span className="contact__card-value">{profile.phone}</span>
            </div>
          </a>

          <a
            href={`${process.env.PUBLIC_URL || ""}/Ahmed-Ibrahim-Frontend-Developer-CV.pdf`}
            download="Ahmed-Ibrahim-Frontend-Developer-CV.pdf"
            className="contact__card contact__card--cv"
            aria-label="Download Ahmed Ibrahim's CV (PDF)"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="contact__card-icon">
              <HiOutlineDocumentText aria-hidden="true" />
            </div>
            <div className="contact__card-info">
              <span className="mono-label">Curriculum Vitae</span>
              <span className="contact__card-value">Download CV (PDF) ↓</span>
            </div>
          </a>
        </div>

        {/* Contact Form */}
        <div className="contact__form-wrapper">
          {!isSubmitted ? (
            <form className="contact__form" onSubmit={handleSubmit} noValidate={false}>
              <div className="contact__field">
                <label htmlFor="contact-name" className="contact__label mono-label">
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  required
                  placeholder="e.g. Alex Smith"
                  value={name}
                  onChange={handleChange}
                  className="contact__input"
                />
              </div>

              <div className="contact__field">
                <label htmlFor="contact-email" className="contact__label mono-label">
                  Your Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  required
                  placeholder="e.g. alex@example.com"
                  value={email}
                  onChange={handleChange}
                  className="contact__input"
                />
              </div>

              <div className="contact__field">
                <label htmlFor="contact-message" className="contact__label mono-label">
                  Your Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows="5"
                  placeholder="Tell me about your project, timeline, or goals..."
                  value={message}
                  onChange={handleChange}
                  className="contact__textarea"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn btn--primary contact__submit-btn"
              >
                {loading ? "Sending Message..." : "Send Message"}
              </button>
            </form>
          ) : (
            <div className="contact__success">
              <div className="contact__success-icon">
                <HiOutlineCheckCircle aria-hidden="true" />
              </div>
              <h3 className="contact__success-title">Message Received!</h3>
              <p className="contact__success-text">
                Thank you for reaching out. I&apos;ll get back to you as soon as possible.
              </p>
              <div style={{ display: "flex", gap: "var(--space-3)", marginTop: "var(--space-4)" }}>
                <a
                  href={`mailto:${profile.email}?subject=Message from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}`}
                  className="btn btn--primary"
                >
                  Open in Mail Client
                </a>
                <button
                  type="button"
                  onClick={handleReset}
                  className="btn btn--ghost"
                >
                  Send Another
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
};

export default Contact;
