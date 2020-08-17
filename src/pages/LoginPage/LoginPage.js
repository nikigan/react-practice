import React from "react";
import "./LoginPage.scss";
import { Link, useLocation, useHistory, useRouteMatch } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Spin } from "antd";
import "antd/es/spin/style/css";
import { onLogin, onRegister } from "../../store/auth/actions";

const LoginPage = () => {
  const { register, handleSubmit, errors, getValues } = useForm();
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  const { from } = location.state || { from: { pathname: "/" } };

  const registerPage = useRouteMatch("/register");

  const submitHandler = (data) => {
    if (registerPage) {
      dispatch(onRegister(data, from, history));
    } else {
      dispatch(onLogin(data, from, history));
    }
  };

  const { loading } = useSelector((state) => state.auth);

  const secondPasswordInput = (
    <>
      <input
        name="passwordRepeat"
        type="password"
        className="login-form__input"
        ref={register({
          required: true,
          validate: (value) => {
            const { password } = getValues();
            return password === value;
          },
        })}
      />
      {errors.passwordRepeat && "Пароли должны совпадать"}
    </>
  );

  return (
    <div className="login-page">
      <div className="login">
        <Spin spinning={loading} tip="Загрузка...">
          <form className="login-form" onSubmit={handleSubmit(submitHandler)}>
            <h3 className="login-form__header">
              {registerPage ? "Регистрация в системе" : "Вход в систему"}
            </h3>
            <input
              name="username"
              type="text"
              className="login-form__input"
              ref={register({ required: true })}
            />
            {errors.username && "Введите имя пользователя"}
            <input
              name="password"
              type="password"
              className="login-form__input"
              ref={register({ required: true })}
            />
            {errors.password && "Введите пароль"}
            {registerPage && secondPasswordInput}
            <div className="login-form__buttons">
              <button
                type="submit"
                className="btn login-form__btn login-form__login-btn"
              >
                {registerPage ? "Зарегистрироваться" : "Войти"}
              </button>
              <Link
                type="button"
                className="login-form__btn login-form__register-btn"
                to={registerPage ? "/login" : "/register"}
              >
                {registerPage ? "Вход" : "Регистрация"}
              </Link>
            </div>
          </form>
        </Spin>
      </div>
    </div>
  );
};

export default LoginPage;
