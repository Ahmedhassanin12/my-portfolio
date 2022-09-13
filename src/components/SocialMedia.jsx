import React from "react";
import { BsLinkedin, BsInstagram, BsGithub } from "react-icons/bs";
const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a style={{cursor: "pointer"}} href="https://github.com/Ahmedhassanin12" target="blank">
          <BsGithub />
        </a>
      </div>
      <div>
        <a style={{cursor: "pointer"}} href="https://www.linkedin.com/in/ahmedhassanin12/" target="blank">
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a style={{cursor: "pointer"}} href="https://www.instagram.com/ahmed_ibrahim72/" target="blank">
          <BsInstagram />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
