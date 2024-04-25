import { getImgUrl } from "../utils/funcs";

function Image({ src, ...props }) {
  return (
    <img
      {...props}
      {...(src ? { crossOrigin: "anonymous" } : {})}
      src={getImgUrl(src)}
    />
  );
}

export default Image;
