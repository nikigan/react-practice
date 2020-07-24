import React from "react";
import AppRouter from "../../router/AppRouter";
import Header from "../Header";
import "./App.scss";
import Container from "../Container";

function App() {
  return (
    <div className="app">
      <Header />
      <Container className="app__container">
        <AppRouter />
      </Container>
    </div>
  );
}

export default App;
