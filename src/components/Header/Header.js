import React from "react";
import "./Header.scss";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  const username = "User";

  return (
    <div className="header">
      <Container className="header__container">
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
      </Container>
    </div>
  );
};

export default Header;
