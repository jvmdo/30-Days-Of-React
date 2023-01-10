const logo = {
  width: "8rem",
  aspectRatio: "1 / 1",
  objectFit: "contain",
};

export function TechLogo({ path }) {
  return <img src={path} alt="" style={logo} />;
}
