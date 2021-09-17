import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Header({ logo }) {
  return (
    // <header className="App-header">
    // <button>click me!</button>
    // </header>
    <header className="App-header">
      <img src={logo} alt="logo" />
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
