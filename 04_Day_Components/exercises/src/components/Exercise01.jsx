import htmlLogo from "../assets/html_logo.png";
import cssLogo from "../assets/css_logo.png";
import jsLogo from "../assets/js_logo.png";
import reactLogo from "../assets/react_logo.png";

const logosWrapper = {
  marginTop: "2.5rem",
  display: "flex",
  flexFlow: "row wrap",
  justifyContent: "center",
  gap: "5rem",
};

const logo = {
  width: "8rem",
  aspectRatio: "1 / 1",
  objectFit: "contain",
};

export function Exercise01() {
  return (
    <section className="exercise">
      <h2 style={{ textAlign: "center" }}>Front End Technologies</h2>
      <div style={logosWrapper}>
        {Logo(htmlLogo)}
        {Logo(cssLogo)}
        {Logo(jsLogo)}
        {Logo(reactLogo)}
      </div>
    </section>
  );
}

function Logo(path) {
  return <img src={path} alt="" style={logo} />;
}
