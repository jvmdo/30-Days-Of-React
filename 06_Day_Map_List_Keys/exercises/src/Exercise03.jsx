import { Bar } from "./components/Bar";
import { data } from "./data/tenMostHighestPopulation";

const chart = {
  display: "grid",
  gridAutoRows: "2rem",
  gap: "0.5rem",
  maxWidth: "50rem",
  marginInline: "auto",
};

export function Exercise03() {
  return (
    <section className="exercise" style={{ textAlign: "center" }}>
      <h1 style={{ fontSize: "2rem" }}>06/30 Days of React</h1>
      <h2 style={{ fontSize: "1.25rem", marginBlock: "1rem 0.5rem" }}>
        World population bar chart
      </h2>
      <p style={{ marginBottom: "2rem" }}>Ten most populated countries</p>
      <div style={chart}>
        {data.map((row) => (
          <Bar
            key={row.country}
            country={row.country}
            population={row.population}
          />
        ))}
      </div>
    </section>
  );
}
