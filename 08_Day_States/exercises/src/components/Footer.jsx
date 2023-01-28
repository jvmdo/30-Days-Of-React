import { themes } from "../themes";

export function Footer({ whichTheme = "dark" }) {
  const theme = themes[whichTheme];

  return (
    <footer style={{ ...theme, textAlign: "center" }}>
      <div className="container">
        <blockquote cite="Emmet Lorem Ipsum generator">
          <q style={{ color: theme.borderColor }}>
            Accusantium distinctio voluptatem quam, vero accusamus? Id eligendi
            nostrum magnam ipsa maxime
          </q>
        </blockquote>
        <span>
          &copyleft; Copyleft <a href="https://github.com/jvmdo">@jvmdo</a>
        </span>
      </div>
    </footer>
  );
}
