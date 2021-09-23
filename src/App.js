import "./App.css";
import Footer from "./footer";
import Header from "./header";
import Home from "./home";
import { LoginForm, RegisterForm } from "./userform";
import logo from "./logo.png";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function HomePage() {
  return <Home />;
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
            <HomePage />
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
