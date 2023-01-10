import htmlLogo from "./assets/html_logo.png";
import cssLogo from "./assets/css_logo.png";
import jsLogo from "./assets/js_logo.png";
import reactLogo from "./assets/react_logo.png";
import { TechLogo } from "./components/TechLogo";

const logosWrapper = {
  marginTop: "2.5rem",
  display: "flex",
  flexFlow: "row wrap",
  justifyContent: "center",
  gap: "5rem",
};

const logoList = [htmlLogo, cssLogo, jsLogo, reactLogo];

export function Exercise01() {
  return (
    <section className="exercise">
      <h2 style={{ textAlign: "center" }}>Front End Technologies</h2>
      <div style={logosWrapper}>
        {logoList.map((logo) => (
          <TechLogo key={logo} path={logo} />
        ))}
      </div>
    </section>
  );
}
