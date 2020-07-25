import React, { useEffect, useState } from "react";
import "./Header.scss";
import classNames from "classnames";
import { Link } from "react-router-dom";
import Container from "../Container";

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  const username = "User";

  const onHeaderBlur = () => {
    setExpanded(false);
  };

  useEffect(
    () => document.addEventListener("mousedown", onHeaderBlur, false),
    []
  );

  const onMenuClick = () => {
    if (!expanded) {
      setExpanded(true);
    } else {
      setExpanded(false);
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
        <div
          className={classNames("header__menu", { expanded })}
          onBlur={onHeaderBlur}
        >
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
