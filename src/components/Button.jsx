function Button({ title, width = "100%", height = 45 }) {
  return (
    <button
      className="flex btn align-center justify-center cormorant f700"
      style={{ width, height }}
    >
      <span>{title}</span>
    </button>
  );
}

export default Button;
