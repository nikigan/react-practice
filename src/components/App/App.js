import React from "react";
import { Container } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import AppRouter from "../AppRouter";
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
