import React, { useState } from "react";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";

import "./Footer.scss";
const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSumited, setIsFormSubmited] = useState(false);
  const [loading, setLoading] = useState(false);
  const { name, email, message } = formData;
  const handelChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: name,
      email: email,
      message: message,
    };

    client.create(contact).then(() => {
      setLoading(false);
      setIsFormSubmited(true);
    });
  };

  return (
    <>
      <h2 className="head-text">Take a coffe & chat with Me</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:ahmedhassanin1891@gmail.com" className="p-text">
            ahmedhassanin1891@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel:01025629429" className="p-text">
            01025629429
          </a>
        </div>
      </div>
      {!isFormSumited ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={name}
              onChange={(e) => handelChange(e)}
            />
          </div>
          <div className="app__flex">
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => handelChange(e)}
            />
          </div>
          <div className="app__flex">
            <textarea
              className="p-text"
              placeholder="Your Message"
              name="message"
              value={message}
              onChange={(e) => handelChange(e)}
            ></textarea>
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>
            {loading ? "sending" : "Send Message"}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thank You for getting in touch</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
