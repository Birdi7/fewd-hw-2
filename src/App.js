import "./App.css";
import { useState } from "react";

function Main() {
  const [state, setState] = useState({ inp: "", submitted: "" });

  function HandleSubmit(event) {
    event.preventDefault();

    setState({ submitted: state.inp, inp: "" });
  }

  return (
    <form onSubmit={HandleSubmit}>
      <label>
        <p> Name: {state.submitted} </p>
        <input
          type="text"
          name="name"
          onChange={(event) => setState({ ...state, inp: event.target.value })}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Main />
      </header>
    </div>
  );
}

export default App;
