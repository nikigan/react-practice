import React, { useEffect, useState } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import Container from "../Container";

const Header = () => {
  const [expandedClass, setExpandedClass] = useState("");

  const username = "User";

  const onHeaderBlur = () => {
    setExpandedClass("");
  };

  useEffect(() => document.addEventListener("mousedown", onHeaderBlur, false));

  const onMenuClick = () => {
    if (expandedClass !== "expanded") {
      setExpandedClass("expanded");
    } else {
      setExpandedClass("");
    }
  };

  return (
    <div className="header">
      <Container className="header__container">
        <button
          type="button"
          className="header__menu-btn"
          onClick={onMenuClick}
        >
          Menu
        </button>
        <div className={`header__menu ${expandedClass}`} onBlur={onHeaderBlur}>
          <div className="header__links">
            <Link className="header__link-item" to="/">
              Главная
            </Link>
            <Link className="header__link-item" to="/owner/places">
              Панель управления заведениями
            </Link>
          </div>
          <div className="header__user">
            Вы вошли как
            <span className="header__user-name">{username}</span>
            <button type="button" className="header__logout">
              Выйти
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
