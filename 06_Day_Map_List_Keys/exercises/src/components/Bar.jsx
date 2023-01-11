const row = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "1rem",
  fontWeight: "bold",
};

export function Bar({ country, population, worldTotal = 7693165599 }) {
  return (
    <div style={row}>
      <strong style={{ flexBasis: "100px", textAlign: "start" }}>
        {country}
      </strong>
      <div style={{ flex: 1 }}>
        <div
          style={{
            width: `${(population / worldTotal) * 100}%`,
            backgroundColor: "#8b5639",
            height: "1.5rem",
            borderRadius: "2px",
          }}
        ></div>
      </div>
      <strong style={{ flexBasis: "100px", textAlign: "end" }}>
        {new Intl.NumberFormat("de-DE").format(population)}
      </strong>
    </div>
  );
}
