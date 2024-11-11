import React from "react";
import "./ContactLink.scss";



const ContactLink = ({ link, image, alt, name, className }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className={`contact__link ${className}`}
    >
        <img className="contact__image" src={image} alt={alt} />
        <h3 className="contact__text">{name}</h3>
    </a>
  );
};

export default ContactLink;
