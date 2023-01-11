export const randomHexColor = () => {
  let hexChars = "0123456789abcdef";
  return Array.from(
    { length: 6 },
    () => hexChars[Math.floor(Math.random() * hexChars.length)]
  ).reduce((color, char) => color + char, "#");
};
