import { useNavigate } from "react-router-dom";

function Button({ title, width = "100%", height = 45, onClick, to }) {
  const navigate = useNavigate();
  const handleClick = () => {
    if (to) return navigate(to);
    if (typeof onClick === "function") onClick();
  };

  return (
    <button
      onClick={handleClick}
      className="flex btn align-center justify-center cormorant f700"
      style={{ width, height }}
    >
      <span>{title}</span>
    </button>
  );
}

export default Button;
