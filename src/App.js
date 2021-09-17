import "./App.css";
import { useState } from "react";
import Footer from "./footer";
import Header from "./header";
import { LoginForm, RegisterForm } from "./userform";
import logo from "./logo.png";
import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Home() {
  // return (
  //   <h2>  home page </h2>
  // );
  return <Login />;
}

function Login() {
  return <LoginForm />;
}

function Register() {
  return <RegisterForm />;
}

function AppContent() {
  return (
    <Router>
      <div>
        <Header logo={logo} />

        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function App() {
  return (
    <div className="App">
      <AppContent />
      <Footer />
    </div>
  );
}

export default App;
