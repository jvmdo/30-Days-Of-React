import "./styles.css";
import { useState } from "react";

// Summer, Spring, Fall, Winter
const seasonColors = ["peachpuff", "springgreen", "lavender", "snow"];

// Morning, Noon, Evening, Night
const daytimeColors = [
  "lightskyblue",
  "navajowhite",
  "palevioletred",
  "slategray",
];

export function App() {
  const [backColor, setBackColor] = useState(seasonColors[0]);
  const [foreColor, setForeColor] = useState(daytimeColors[0]);
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 2000);

  const form = (
    <form>
      <div className="season">
        <label htmlFor="season">Season Colors</label>
        <select
          id="season"
          value={backColor}
          onChange={(event) => {
            setBackColor(event.target.value);
          }}
        >
          <option value={seasonColors[0]}>Summer</option>
          <option value={seasonColors[1]}>Spring</option>
          <option value={seasonColors[2]}>Fall</option>
          <option value={seasonColors[3]}>Winter</option>
        </select>
      </div>
      <div className="daytime">
        <label htmlFor="daytime">Daytime Colors</label>
        <select
          id="daytime"
          value={foreColor}
          onChange={(event) => {
            setForeColor(event.target.value);
          }}
        >
          <option value={daytimeColors[0]}>Morning</option>
          <option value={daytimeColors[1]}>Noon</option>
          <option value={daytimeColors[2]}>Evening</option>
          <option value={daytimeColors[3]}>Night</option>
        </select>
      </div>
    </form>
  );

  return (
    <div className="wrapper">
      <section className="top">
        <h1>Seasoned daytime background mix blend</h1>
        <div>
          <ol>
            <li>🔃 Wait the color options loading</li>
            <li>🎨 Choose a color combination you'd like to see</li>
            <li>👀 Peek at result</li>
          </ol>
        </div>
        {isLoading ? <span>Loading colors</span> : form}
      </section>
      <section className="bottom">
        <div className="background" style={{ backgroundColor: backColor }}>
          <div
            className="foreground"
            style={{ backgroundColor: foreColor, mixBlendMode: "hue" }}
          ></div>
        </div>
      </section>
    </div>
  );
}
