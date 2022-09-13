import React from "react";
import "./App.scss";

import { ABOUT, Header, Footer, Skills, Testimonial, Work } from "./container";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <ABOUT />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
