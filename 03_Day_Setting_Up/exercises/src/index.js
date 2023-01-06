import React from "react";
import ReactDOM from "react-dom/client";
import htmlLogo from "./assets/html_logo.png";
import cssLogo from "./assets/css_logo.png";
import javascriptLogo from "./assets/javascript_logo.png";
import reactLogo from "./assets/react_logo.png";

const root = ReactDOM.createRoot(document.getElementById("root"));

const exercise01 = (
  <section className="exercise">
    <h2 style={{ textAlign: "center" }}>Front End Technologies</h2>
    <div className="logos">
      <img src={htmlLogo} alt="" />
      <img src={cssLogo} alt="" />
      <img src={javascriptLogo} alt="" />
      <img src={reactLogo} alt="" />
    </div>
  </section>
);

const exercise02 = (
  <section className="exercise">
    <div className="newsletterWrapper">
      <h2>Subscribe</h2>
      <p>Sign up with your email address to receive news and updates.</p>
      <form onSubmit={(e) => e.preventDefault()} className="newsletterForm">
        <input type="text" className="firstName" placeholder="First name" />
        <input type="text" className="lastName" placeholder="Last name" />
        <input type="email" className="email" placeholder="Email" />
        <button>Subscribe</button>
      </form>
    </div>
  </section>
);

const skills = [
  "HTML",
  "CSS",
  "Sass",
  "JS",
  "React",
  "Redux",
  "Node",
  "MongoDB",
  "Python",
  "Flask",
  "Django",
  "NumPy",
  "Pandas",
  "Data Analysis",
  "MySQL",
  "GraphQL",
  "D3.js",
  "Gatsby",
  "Docker",
  "Heroku",
  "Git",
];

const options1 = {
  month: "short",
  day: "numeric",
  year: "numeric",
  timeZone: "America/Manaus",
};

const exercise03 = (
  <section className="exercise">
    <div className="card">
      <img
        src="https://v5j9q4b5.rocketcdn.me/wp-content/uploads/2021/03/mussum-quem-e-historia-do-sambista-e-ator-popular.jpg"
        alt="Mussum Cacildis"
      />
      <h1>
        Mussum Cacildis
        <span style={{ verticalAlign: "middle", marginLeft: "0.5rem" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="#0af1f5"
            viewBox="0 0 256 256"
          >
            <rect width="256" height="256" fill="none"></rect>
            <path d="M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm49.5,85.8-58.6,56a8.1,8.1,0,0,1-5.6,2.2,7.7,7.7,0,0,1-5.5-2.2l-29.3-28a8,8,0,1,1,11-11.6l23.8,22.7,53.2-50.7a8,8,0,0,1,11,11.6Z"></path>
          </svg>
        </span>
      </h1>
      <big>Sambista, Ator e Senioris Developis brasileiro</big>
      <h2>Skills</h2>
      <div className="skills">
        {skills.map((skill) => (
          <span key={skill} className="chip">
            {skill}
          </span>
        ))}
      </div>
      <small>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="#0af1f5"
          viewBox="0 0 256 256"
          style={{ verticalAlign: "middle" }}
        >
          <rect width="256" height="256" fill="none"></rect>
          <circle
            cx="128"
            cy="128"
            r="96"
            fill="none"
            stroke="#0af1f5"
            stroke-width="12"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></circle>
          <polyline
            points="128 72 128 128 184 128"
            fill="none"
            stroke="#0af1f5"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="12"
          ></polyline>
        </svg>{" "}
        Joined on{" "}
        {new Intl.DateTimeFormat("en-US", options1).format(
          new Date(1672982545369)
        )}
      </small>
    </div>
  </section>
);

const solution = (
  <main>
    {exercise01}
    {exercise02}
    {exercise03}
  </main>
);

root.render(<React.StrictMode>{solution}</React.StrictMode>);
