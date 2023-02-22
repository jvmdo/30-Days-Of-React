import logo from "./logo.svg";
import "./App.css";
import countries from "./data/countries.json";
import { useState } from "react";

function App() {
  const terms = ["Lorem", "Ipsum", "Dolor"];
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    country: "",
    comment: "",
    terms: {
      [terms[0]]: false,
      [terms[1]]: false,
      [terms[2]]: false,
    },
  });
  const [showData, setShowData] = useState(false);

  function handleDataChange(event) {
    const field = event.target.name;
    const value = event.target.value;

    if (event.target.type === "checkbox") {
      const value = event.target.checked;
      setFormData({
        ...formData,
        terms: {
          ...formData.terms,
          [field]: value,
        },
      });
      return;
    }

    setFormData({ ...formData, [field]: value });
    setShowData(false);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    setShowData(true);
    console.log(formData);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Day 12/30 of React - Forms</h1>
        <form onSubmit={handleFormSubmit} noValidate>
          <div className="field">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleDataChange}
            />
          </div>

          <div className="field">
            <label htmlFor="email">Email:&nbsp;</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleDataChange}
            />
          </div>

          <div className="field">
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleDataChange}
            />
          </div>

          <fieldset>
            <legend>Gender</legend>

            <div className="field">
              <input
                type="radio"
                name="gender"
                id="male"
                value="male"
                checked={formData.gender === "male"}
                onChange={handleDataChange}
              />
              <label htmlFor="male">Male&nbsp;&nbsp;&nbsp;</label>
            </div>

            <div className="field">
              <input
                type="radio"
                name="gender"
                id="female"
                value="female"
                checked={formData.gender === "female"}
                onChange={handleDataChange}
              />
              <label htmlFor="female">Female</label>
            </div>

            <div className="field">
              <input
                type="radio"
                name="gender"
                id="other"
                value="other"
                checked={formData.gender === "other"}
                onChange={handleDataChange}
              />
              <label htmlFor="other">Other&nbsp;&nbsp;</label>
            </div>
          </fieldset>

          <div className="field">
            <label htmlFor="country">Select your country: </label>
            <select
              id="country"
              name="country"
              required
              value={formData.country}
              onChange={handleDataChange}
            >
              {countries.map(({ name }) => (
                <option value={name}>{name}</option>
              ))}
            </select>
          </div>

          <label htmlFor="comment">Write a comment if you wish:</label>
          <textarea
            id="comment"
            name="comment"
            value={formData.comment}
            onChange={handleDataChange}
          ></textarea>

          <fieldset>
            <legend>You shall agree the terms</legend>

            {terms.map((term) => (
              <div className="field" key={term}>
                <input
                  type="checkbox"
                  id={term}
                  name={term}
                  value={term}
                  checked={formData.terms[term] === true}
                  onChange={handleDataChange}
                />
                <label htmlFor={term}>{term}</label>
              </div>
            ))}
          </fieldset>

          <button>Submit</button>
        </form>
        {showData && <pre>{JSON.stringify(formData, null, 2)}</pre>}
      </header>
    </div>
  );
}

export default App;
