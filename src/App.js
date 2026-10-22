import React from "react";

import { Navbar, SiteFooter } from "./components";
import { features } from "./constants";
import { About, Contact, Hero, Skills, Testimonial, Work } from "./container";

function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Work />
        <Skills />
        {features.showTestimonials && <Testimonial />}
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}

export default App;
