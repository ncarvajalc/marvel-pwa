import { useState } from "react";
import "./character.css";

export default function Character(props) {
  const [name] = useState(props.character.name);
  const [description] = useState(props.character.description);
  const [thumbnail] = useState(props.character.thumbnail);

  return (
    <div className="col-12 hero-content-holder">
      <div className="row hero-content">
        <div className="col-4 hero-img-holder">
          <img
            src={`${thumbnail.path}/standard_xlarge.${thumbnail.extension}`}
            alt={name}
            className="hero-img"
          />
        </div>
        <div className="col-8 hero-description">
          <h2>{name}</h2>
          <p>{description ? description : "No description available"}</p>
        </div>
      </div>
    </div>
  );
}
