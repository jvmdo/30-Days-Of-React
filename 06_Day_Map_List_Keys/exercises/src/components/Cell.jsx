import { randomHexColor } from "../utils/colorGenerator";

const style = {
  color: "snow",
  fontSize: "1.5rem",
  fontWeight: "bold",
  textTransform: "uppercase",
  letterSpacing: "2px",
  borderRadius: "4px",
  backgroundColor: "dimgray",
  display: "grid",
  placeItems: "center",
};

const NUMBER2COLOR = Object.freeze({
  even: "yellowgreen",
  odd: "gold",
  prime: "orange",
});

export function Cell({ number, color = randomHexColor() }) {
  if (number) {
    const numberType = isPrime(number) ? "prime" : number % 2 ? "odd" : "even";
    color = NUMBER2COLOR[numberType];
  }
  return (
    <div
      style={{
        ...style,
        backgroundColor: `${color}`,
        fontSize: `${number ?? "0.75rem"}`,
      }}
    >
      {number ?? `${color}`}
    </div>
  );
}

function isPrime(n) {
  for (let d = 2; d * d <= n; d++) {
    if (n % d === 0) return false;
  }
  return n !== 1;
}
