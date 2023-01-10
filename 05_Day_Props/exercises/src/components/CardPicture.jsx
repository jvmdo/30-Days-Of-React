const style = {
  width: "16rem",
  aspectRatio: 1.66,
  clipPath: "circle(55%)",
  borderRadius: "100%",
};

export function CardPicture({ src, alt }) {
  return <img src={src} alt={alt} style={style} />;
}
