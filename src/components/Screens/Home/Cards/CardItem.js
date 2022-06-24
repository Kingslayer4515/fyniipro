import React from "react";
import { Link } from "react-router-dom";

function CardItem(props) {
  return (
    <>
      {(props.topic === props.label || props.topic === "All") && (
        <li className="cards__item">
          <Link className="cards__item__link" to={props.path}>
            <figure
              className="cards__item__pic-wrap"
              data-category={props.label}
            >
              <img className="cards__item__img" alt="img" src={props.src} />
            </figure>
            <div
              style={{ backgroundColor: "#fff" }}
              className="cards__item__info"
            >
              <h5 className="cards__item__text">{props.text}</h5>
            </div>
          </Link>
        </li>
      )}
    </>
  );
}

export default CardItem;
