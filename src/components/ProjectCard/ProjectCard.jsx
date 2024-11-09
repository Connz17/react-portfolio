import "./ProjectCard.scss";
import template from "../../images/projectPreviews/templatePreview.webp";
import { Link } from "react-router-dom";
import { useState } from "react";

const ProjectCard = ({ title, image, preview }) => {
  const [currentImage, setCurrentImage] = useState(image);

  const handleMouseOver = () => setCurrentImage(preview);
  const handleMouseOut = () => setCurrentImage(image);
  if (preview === "") {
    preview = template;
  }

  return (
    <div className="card">
      <Link to={`/${title}`} className="card__link">
      <div>
          <h3 className="card__title">{title}</h3>
      </div>
      <img
        className="card__image"
        src={currentImage}
        alt="project thumbnail"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      />
        </Link>
    </div>
  );
};

export default ProjectCard;
