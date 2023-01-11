import { randomHexColor } from "../utils/colorGenerator";

const baseStyle = {
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
};

export function ColorfulBox({ color = randomHexColor() }) {
  return (
    <div
      style={{
        ...baseStyle,
        backgroundColor: `${color}`,
      }}
    >
      {color}
    </div>
  );
}
