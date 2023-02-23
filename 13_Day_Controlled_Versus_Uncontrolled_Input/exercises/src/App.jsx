import { useState, useRef } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import countries from "./data/countries.json";

function App() {
  const terms = ["Lorem", "Ipsum", "Dolor"];
  const [showData, setShowData] = useState(false);
  const [formData, setFormData] = useState({});
  const formRef = useRef(null);

  function handleFormSubmit(event) {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(formRef.current));
    console.log(formData);
    setShowData(true);
    setFormData(formData);
  }

  return (
    <div className="App">
      <img src={reactLogo} className="logo" alt="logo" />
      <h1>Day 13/30 of React - Uncontrolled Inputs</h1>
      <form onSubmit={handleFormSubmit} ref={formRef} noValidate>
        <div className="field">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>

        <div className="field">
          <label htmlFor="email">Email:&nbsp;</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div className="field">
          <label htmlFor="phone">Phone:</label>
          <input type="tel" id="phone" name="phone" required />
        </div>

        <fieldset>
          <legend>Gender</legend>

          <div className="field">
            <input type="radio" name="gender" id="male" value="male" />
            <label htmlFor="male">Male&nbsp;&nbsp;&nbsp;</label>
          </div>

          <div className="field">
            <input type="radio" name="gender" id="female" value="female" />
            <label htmlFor="female">Female</label>
          </div>

          <div className="field">
            <input type="radio" name="gender" id="other" value="other" />
            <label htmlFor="other">Other&nbsp;&nbsp;</label>
          </div>
        </fieldset>

        <div className="field">
          <label htmlFor="country">Select your country: </label>
          <select id="country" name="country" required>
            {countries.map(({ name }) => (
              <option value={name}>{name}</option>
            ))}
          </select>
        </div>

        <label htmlFor="comment">Write a comment if you wish:</label>
        <textarea id="comment" name="comment"></textarea>

        <fieldset>
          <legend>You shall agree the terms</legend>

          {terms.map((term) => (
            <div className="field" key={term}>
              <input
                type="checkbox"
                id={term}
                name={`Term ${term}`}
                value={term}
              />
              <label htmlFor={term}>{term}</label>
            </div>
          ))}
        </fieldset>

        <button>Submit</button>
      </form>
      {showData && <pre>{JSON.stringify(formData, null, 2)}</pre>}
    </div>
  );
}

export default App;
