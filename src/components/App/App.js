import React from "react";
import { Container } from "react-bootstrap";
import AppRouter from "../../router/AppRouter";
import Header from "../Header";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Header />
      <Container className="app-container">
        <AppRouter />
      </Container>
    </div>
  );
}

export default App;
