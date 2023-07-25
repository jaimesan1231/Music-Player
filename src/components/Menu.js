import React from "react";
import "./styles/Menu.css";
function Menu(props) {
  return (
    <div className="menu">
      <span className="menu__title">{props.title}</span>
      <ul className="menu__list">
        {props.items.map((item) => {
          return (
            <li className="menu__list-item" key={item}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Menu;
