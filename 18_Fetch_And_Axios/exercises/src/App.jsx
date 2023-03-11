import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [answers, setAnswers] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //* Fetch + then chaining
    // fetch("https://api.thecatapi.com/v1/breeds")
    //   .then((response) => response.json())
    //   .then((data) => console.log(data))
    //   .catch((err) => console.log(err));

    async function getCats() {
      setIsLoading(true);

      //* Fetch + async/await
      // const response = await fetch("https://api.thecatapi.com/v1/breeds");
      // const data = await response.json();
      // console.log(data);

      //* Axios + async/await
      // await new Promise((resolve) => setTimeout(() => resolve(true), 3000));
      try {
        const response = await axios.get("https://api.thecatapi.com/v1/breeds");
        const data = response.data;
        getAnswers(data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    }

    getCats();
  }, []);

  function getAnswers(data) {
    const answers = {
      numberOfBreeds: data.length,
      avgLifespan:
        data.reduce((acc, { life_span }) => {
          const [a, b] = life_span.match(/\d+/g).map(Number);
          return acc + (a + b) / 2;
        }, 0) / data.length,
      avgWeight:
        data.reduce((acc, { weight: { metric } }) => {
          const [a, b] = metric.match(/\d+/g).map(Number);
          return acc + (a + b) / 2;
        }, 0) / data.length,
      countriesBreed: new Set(data.map(({ country_code }) => country_code))
        .size,
      moreBreeds: Object.entries(
        data.reduce(
          (acc, { country_code: c }) => ((acc[c] = (acc[c] ?? 0) + 1), acc),
          {}
        )
      ).sort(([_, a], [__, b]) => b - a)[0][0],
      sortByMore: Object.entries(
        data.reduce(
          (acc, { country_code: c }) => ((acc[c] = (acc[c] ?? 0) + 1), acc),
          {}
        )
      ).sort(([_, a], [__, b]) => b - a),
    };
    setAnswers(answers);
  }

  return (
    <div className="App">
      <h1>Day 18/30 of React - Fetch and Axios</h1>
      <h2>The Cat API</h2>
      {isLoading ? (
        <h3>Loading cats...</h3>
      ) : (
        <div className="card">
          <p>
            There are <code className="logo">{answers.numberOfBreeds}</code>{" "}
            different cats breed
          </p>
          <p>
            On average, a cat can weight about{" "}
            <code className="logo">{answers.avgWeight.toFixed(2)}</code> and
            live about{" "}
            <code className="logo">{answers.avgLifespan.toFixed(2)}</code> years
          </p>
          <div className="read-the-docs">
            <details>
              <summary>How many countries do have cat breeds?</summary>
              <span>{answers.countriesBreed}</span>
            </details>
            <details>
              <summary>
                Which country has the highest number of cat breeds?
              </summary>
              <span>{answers.moreBreeds}</span>
            </details>
            <details>
              <summary>
                Arrange countries in ascending order based on the number of cat
                breeds they have?
              </summary>
              <span>
                <pre>
                  {JSON.stringify(
                    Object.fromEntries(answers.sortByMore),
                    null,
                    4
                  )}
                </pre>
              </span>
            </details>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
