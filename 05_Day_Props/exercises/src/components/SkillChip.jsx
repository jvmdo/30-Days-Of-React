const style = {
  padding: "0.5rem 0.75rem",
  color: "snow",
  backgroundColor: "#0af1f5",
  borderRadius: "0.5rem",
};

export function SkillChip({ skill }) {
  return (
    <span key={skill} style={style}>
      {skill}
    </span>
  );
}
