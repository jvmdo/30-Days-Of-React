import { skills } from "../utils/data";

const picture = {
  width: "16rem",
  aspectRatio: 1.66,
  clipPath: "circle(55%)",
  borderRadius: "100%",
};

const skillsWrapper = {
  display: "flex",
  flexFlow: "row wrap",
  alignItems: "center",
  gap: "0.5rem",
  marginBottom: "2rem",
};

const chipStyle = {
  padding: "0.5rem 0.75rem",
  color: "snow",
  backgroundColor: "#0af1f5",
  borderRadius: "0.5rem",
};

const dateFormatOptions = {
  month: "short",
  day: "numeric",
  year: "numeric",
  timeZone: "America/Manaus",
};

const nameIcon = (
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
);

const dateIcon = (
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
  </svg>
);

export function Exercise03() {
  return (
    <section className="exercise">
      <div className="card">
        {cardPicture()}
        <h1>
          Mussum Cacildis
          {nameIcon}
        </h1>
        <big>Sambista, Ator e Senioris Developis brasileiro</big>
        <h2>Skills</h2>
        <div style={skillsWrapper}>{skills.map((skill) => chip(skill))}</div>
        <small>
          {dateIcon} Joined on{" "}
          {new Intl.DateTimeFormat("en-US", dateFormatOptions).format(
            new Date(1672982545369)
          )}
        </small>
      </div>
    </section>
  );
}

function cardPicture() {
  return (
    <img
      src="https://v5j9q4b5.rocketcdn.me/wp-content/uploads/2021/03/mussum-quem-e-historia-do-sambista-e-ator-popular.jpg"
      alt="Mussum Cacildis"
      style={picture}
    />
  );
}

function chip(skill) {
  return (
    <span key={skill} style={chipStyle}>
      {skill}
    </span>
  );
}
