// import logo from './logo.svg';
import { useRef, useState } from "react";
import "./App.css";
// import { useEffect, useState } from 'react';
import useRandomJoke from "./useRandomJoke";

function App() {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);

  const [firstName, setFirstName] = useState("Sean");
  const [lastName, setLastName] = useState("Chua");

  const joke = useRandomJoke(firstName, lastName);

  const generateJoke = (e) => {
    e.preventDefault();
    setFirstName(firstNameRef.current.value);
    setLastName(lastNameRef.current.value);
  };

  return (
    <div className="App">
      <centre>
        <h1>Joke Generator POG</h1>

        <h2>{joke}</h2>
        <form>
          <input placeholder="First Name" ref={firstNameRef} />
          <input placeholder="Last Name" ref={lastNameRef} />
          <button onClick={generateJoke}>Gimme joke</button>
        </form>
      </centre>
    </div>
  );
}

export default App;
