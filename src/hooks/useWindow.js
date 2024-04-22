import { useEffect, useState } from "react";

function useWindow({ handler }) {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      const dimention = {
        width: window.innerWidth,
        height: window.innerHeight,
      };
      setWindowSize(dimention);
      if (typeof handler === "function") handler(dimention);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowSize;
}

export default useWindow;
