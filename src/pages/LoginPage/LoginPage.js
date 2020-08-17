import React from "react";
import "./LoginPage.scss";
import { Link, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { onLogin } from "../../store/auth/actions";

const LoginPage = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const location = useLocation();

  const { from } = location.state || { from: { pathname: "/" } };

  const submitHandler = (data) => {
    dispatch(onLogin(data.username, data.password, from));
  };

  return (
    <div className="login-page">
      <div className="login">
        <form className="login-form" onSubmit={handleSubmit(submitHandler)}>
          <h3 className="login-form__header">Вход в систему</h3>
          <input
            name="username"
            type="text"
            className="login-form__input"
            ref={register({ required: true })}
          />
          <input
            name="password"
            type="password"
            className="login-form__input"
            ref={register({ required: true })}
          />
          <div className="login-form__buttons">
            <button
              type="submit"
              className="btn login-form__btn login-form__login-btn"
            >
              Войти
            </button>
            <Link
              type="button"
              className="login-form__btn login-form__register-btn"
              to="/register"
            >
              Регистрация
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
