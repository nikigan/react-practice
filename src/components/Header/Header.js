import React, { useEffect, useState } from "react";
import "./Header.scss";
import classNames from "classnames";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Container from "../Container";
import { onLogout } from "../../store/auth/actions";

const Header = () => {
  const [expanded, setExpanded] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const { username } = useSelector((state) => state.auth);

  const usernameBlock = username && (
    <>
      <span>Вы вошли как</span>
      <span className="header__user-name">{username}</span>
    </>
  );

  const onHeaderBlur = () => {
    setExpanded(false);
  };

  useEffect(
    () => document.addEventListener("mousedown", onHeaderBlur, false),
    []
  );

  const onMenuClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="header">
      <Container className="header__container">
        <button
          type="button"
          className="header__menu-btn"
          onClick={onMenuClick}
        >
          Меню
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
            {usernameBlock}
            <button
              type="button"
              className="header__logout"
              onClick={() => dispatch(onLogout(history))}
            >
              Выйти
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default Header;
