import { themes } from "../themes";

const headingStyle = {
  fontSize: "2.5rem",
  fontWeight: "bold",
  letterSpacing: "1.25px",
};

const tagsLayout = {
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
};

const tagStyle = new Map(
  Object.entries({
    display: "inline-block",
    border: "1px solid",
    borderRadius: "100vw",
    fontSize: "0.75rem",
    fontWeight: "bold",
    lineHeight: 0,
    padding: "0.5rem",
    cursor: "pointer",
  })
);

export function Header({ whichTheme = "dark" }) {
  const theme = themes[whichTheme];

  tagStyle.set("color", theme.borderColor);
  tagStyle.set("borderColor", theme.borderColor);

  return (
    <header style={theme}>
      <div className="container" style={{ textAlign: "center" }}>
        <h1 style={headingStyle}>World Countries Flags</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus iure
          eligendi fuga accusantium placeat. Deleniti dolorem est molestiae
          adipisci veniam?
        </p>
        <ul style={tagsLayout}>
          <li>
            <span style={Object.fromEntries(tagStyle)}>world</span>
          </li>
          <li>
            <span style={Object.fromEntries(tagStyle)}>countries</span>
          </li>
          <li>
            <span style={Object.fromEntries(tagStyle)}>flags</span>
          </li>
        </ul>
      </div>
    </header>
  );
}
