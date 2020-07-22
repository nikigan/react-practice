import React from "react";
import "./Header.scss";
import { Container } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Container>
        <ul className="header__links">
          <li>
            <Link className="header__link-item" to="/">
              Главная
            </Link>
          </li>
          <li>
            <Link className="header__link-item" to="/control-panel">
              Панель управления
            </Link>
          </li>
        </ul>
      </Container>
    </div>
  );
};

export default Header;
