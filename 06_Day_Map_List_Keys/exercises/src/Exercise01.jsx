import { Cell } from "./components/Cell";

const numbersGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(6rem, 1fr)",
  gridAutoRows: "6rem",
  gap: "1px",
  maxWidth: "50rem",
  marginInline: "auto",
};

export function Exercise01() {
  return (
    <section
      className="exercise"
      style={{ textAlign: "center", fontSize: "1.25rem" }}
    >
      <h1 style={{ fontSize: "2rem" }}>06/30 Days of React</h1>
      <h2 style={{ marginBlock: "1rem" }}>
        Colored cells based on even, odd and prime properties
      </h2>
      <div style={numbersGrid}>
        {Array.from({ length: 32 }, (_, i) => (
          <Cell key={i} number={i + 1} />
        ))}
      </div>
    </section>
  );
}
