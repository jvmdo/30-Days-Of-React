import { useState } from "react";
import data from "../data/countries.json";
import { themes } from "../themes";

const cardStyle = new Map(
  Object.entries({
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    boxShadow: "2px 2px 4px #00000030, -2px -2px 4px #00000030",
    borderRadius: "10px",
    height: "60vh",
    maxWidth: "calc(100vw - 4rem)",
  })
);

const headingStyle = new Map(
  Object.entries({
    fontSize: "1.5rem",
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: "center",
    borderBottom: "1px solid",
    padding: "0 1rem 1rem",
  })
);

const listStyle = {
  marginBottom: "1rem",
  paddingInline: "1rem",
};

const btnStyle = new Map(
  Object.entries({
    borderRadius: "10px",
    fontWeight: "bold",
    height: "2.5rem",
    width: "100%",
  })
);

export function Main({ whichTheme = "dark" }) {
  const [state, setState] = useState(data[31]);

  function getRandomCountry() {
    return data[Math.floor(Math.random() * data.length)];
  }

  function handleClick() {
    const nextCountry = getRandomCountry();
    setState(nextCountry);
  }

  const theme = { ...themes[whichTheme] };
  const bgColor = whichTheme === "dark" ? "#03506F" : "#9ED2C6";

  // Using Map because, for some reason, React is throwing an
  // "read-only" error when I try to set styles object properties
  cardStyle.set("backgroundColor", theme.backgroundColor);
  headingStyle.set("borderColor", theme.borderColor);
  btnStyle.set("backgroundColor", theme.buttonColor);
  btnStyle.set("color", theme.bgColor);
  theme.backgroundColor = bgColor;

  const { flag, name, capital, languages, population, currency } = state;

  return (
    <main style={theme}>
      <div className="container">
        <article style={Object.fromEntries(cardStyle)}>
          <img src={flag} alt={`${name} national flag`} />
          <h2 style={Object.fromEntries(headingStyle)}>{name}</h2>
          <ul style={listStyle}>
            <li>
              <span>Capital:</span> <strong>{capital}</strong>
            </li>
            <li>
              <span>Language:</span>{" "}
              <strong>{new Intl.ListFormat("en-US").format(languages)}</strong>
            </li>
            <li>
              <span>Population:</span> <strong>{population}</strong>
            </li>
            <li>
              <span>Currency:</span> <strong>{currency}</strong>
            </li>
          </ul>
        </article>
        <button
          className="next"
          type="button"
          onClick={handleClick}
          style={Object.fromEntries(btnStyle)}
        >
          🏴 Next Country 🏳️
        </button>
      </div>
    </main>
  );
}
