import { hexaColor } from "../utils/colorGenerator";

const colorList = Array.from({ length: 5 }, () => hexaColor());

export function Exercise04() {
  return (
    <section className="exercise">
      {colorList.map((color) => coloredContainer(color))}
    </section>
  );
}

function coloredContainer(color) {
  return (
    <div
      style={{
        height: "4rem",
        marginBottom: "2px",
        display: "grid",
        placeItems: "center",
        color: "white",
        textTransform: "uppercase",
        fontWeight: "bold",
        borderRadius: "4px",
        letterSpacing: "2px",
        fontFamily: "monospace",
        fontSize: "1.5rem",
        backgroundColor: `${color}`,
      }}
    >
      {color}
    </div>
  );
}
