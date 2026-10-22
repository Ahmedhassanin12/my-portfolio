import React from "react";
import { HiArrowUp } from "react-icons/hi";
import { profile } from "../../constants";
import SocialLinks from "../SocialLinks/SocialLinks";
import "./SiteFooter.scss";

/** Single site footer — previously the copyright line was repeated in every section. */
const SiteFooter = () => (
  <footer className="site-footer">
    <div className="container site-footer__inner">
      <p className="site-footer__copy">
        © {new Date().getFullYear()} {profile.name}. All rights reserved.
      </p>
      <SocialLinks />
      <a className="site-footer__top text-link" href="#home">
        Back to top <HiArrowUp aria-hidden="true" />
      </a>
    </div>
  </footer>
);

export default SiteFooter;
