const styles = {
  backgroundColor: "white",
  padding: "0.5rem 1rem",
  font: "inherit",
  border: "none",
  borderRadius: "8px",
  flex: "3 1 8rem",
};

export function InputField({ type, placeholder, ...restOfHTMLAttributes }) {
  return (
    <input
      type={type}
      style={styles}
      placeholder={placeholder}
      {...restOfHTMLAttributes}
    />
  );
}
