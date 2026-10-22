import React from "react";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { socialLinks } from "../../constants";
import "./SocialLinks.scss";

const icons = {
  github: BsGithub,
  linkedin: BsLinkedin,
  instagram: BsInstagram,
};

/** Icon-only social links with accessible names. */
const SocialLinks = ({ className = "" }) => (
  <ul className={`social-links ${className}`.trim()}>
    {socialLinks.map(({ id, label, href }) => {
      const Icon = icons[id];
      return (
        <li key={id}>
          <a
            className="social-links__link"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${label} (opens in a new tab)`}
            title={label}
          >
            <Icon aria-hidden="true" focusable="false" />
          </a>
        </li>
      );
    })}
  </ul>
);

export default SocialLinks;
