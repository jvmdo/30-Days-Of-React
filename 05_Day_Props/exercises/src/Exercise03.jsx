import { CardPicture } from "./components/CardPicture";
import { JoinedDate } from "./components/JoinedDate";
import { SkillChip } from "./components/SkillChip";

import { skills } from "./utils/data";

const skillsWrapper = {
  display: "flex",
  flexFlow: "row wrap",
  alignItems: "center",
  gap: "0.5rem",
  marginBottom: "2rem",
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

export function Exercise03() {
  return (
    <section className="exercise">
      <div className="card">
        <CardPicture
          src="https://v5j9q4b5.rocketcdn.me/wp-content/uploads/2021/03/mussum-quem-e-historia-do-sambista-e-ator-popular.jpg"
          alt="Mussum Cacildis"
        />
        <h1>
          Mussum Cacildis
          {nameIcon}
        </h1>
        <big>Sambista, Ator e Senioris Developis brasileiro</big>
        <h2>Skills</h2>
        <div style={skillsWrapper}>
          {skills.map((skill) => (
            <SkillChip skill={skill} />
          ))}
        </div>
        <JoinedDate date={1672982545369} />
      </div>
    </section>
  );
}
