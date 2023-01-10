const style = {
  backgroundColor: "salmon",
  cursor: "pointer",
  border: "none",
  borderRadius: "8px",
  padding: "0.5rem 1rem",
  color: "white",
  fontWeight: "bold",
  flex: "2 1 3rem",
  maxWidth: "18rem",
};

function buttonHoverIn(event) {
  event.currentTarget.style.backgroundColor = "lightsalmon";
}

function buttonHoverOut(event) {
  event.currentTarget.style.backgroundColor = "salmon";
}

export function SubmitButton() {
  return (
    <button
      style={style}
      onMouseEnter={buttonHoverIn}
      onMouseOut={buttonHoverOut}
    >
      Subscribe
    </button>
  );
}
