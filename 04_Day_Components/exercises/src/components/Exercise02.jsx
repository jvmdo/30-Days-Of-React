const wrapper = {
  textAlign: "center",
  backgroundColor: "paleturquoise",
  padding: "2rem",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
};

const title = {
  textTransform: "uppercase",
};

const form = {
  display: "flex",
  flexFlow: "row wrap",
  justifyContent: "center",
  gap: "1rem 0.5rem",
  maxWidth: "43rem",
  marginInline: "auto",
};

const input = {
  backgroundColor: "white",
  padding: "0.5rem 1rem",
  font: "inherit",
  border: "none",
  borderRadius: "8px",
  flex: "3 1 8rem",
};

const button = {
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

export function Exercise02() {
  return (
    <section className="exercise">
      <div style={wrapper}>
        <h2 style={title}>Subscribe</h2>
        <p>Sign up with your email address to receive news and updates.</p>
        <form onSubmit={(e) => e.preventDefault()} style={form}>
          <input type="text" style={input} placeholder="First name" />
          <input type="text" style={input} placeholder="Last name" />
          <input type="email" style={input} placeholder="Email" />
          <button
            style={button}
            onMouseEnter={buttonHoverIn}
            onMouseOut={buttonHoverOut}
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
