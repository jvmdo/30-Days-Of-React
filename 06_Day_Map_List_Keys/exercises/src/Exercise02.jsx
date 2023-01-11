import { Cell } from "./components/Cell";

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(6rem, 1fr)",
  gridAutoRows: "6rem",
  gap: 1,
  maxWidth: "50rem",
  marginInline: "auto",
};

export function Exercise02() {
  return (
    <section
      className="exercise"
      style={{ textAlign: "center", fontSize: "1.25rem" }}
    >
      <h1 style={{ fontSize: "2rem" }}>06/30 Days of React</h1>
      <h2 style={{ marginBlock: "1rem" }}>Grid of random colorful boxes</h2>
      <div style={grid}>
        {Array.from({ length: 32 }, (_, i) => (
          <Cell key={i} />
        ))}
      </div>
    </section>
  );
}
