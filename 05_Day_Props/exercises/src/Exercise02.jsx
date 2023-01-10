import { InputField } from "./components/InputField";
import { SubmitButton } from "./components/SubmitButton";

const wrapper = {
  textAlign: "center",
  backgroundColor: "paleturquoise",
  padding: "2rem",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
};

const title = {
  textTransform: "uppercase",
};

const form = {
  display: "flex",
  flexFlow: "row wrap",
  justifyContent: "center",
  gap: "1rem 0.5rem",
  maxWidth: "43rem",
  marginInline: "auto",
};

export function Exercise02() {
  return (
    <section className="exercise">
      <div style={wrapper}>
        <h2 style={title}>Subscribe</h2>
        <p>Sign up with your email address to receive news and updates.</p>
        <form onSubmit={(e) => e.preventDefault()} style={form}>
          <InputField type="text" placeholder="First name" />
          <InputField type="text" placeholder="Last name" />
          <InputField type="email" placeholder="Email" />
          <SubmitButton />
        </form>
      </div>
    </section>
  );
}
