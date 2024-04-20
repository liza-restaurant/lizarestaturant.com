import bg from "../assets/bg.png";

function ImgBG({ className, children, ...props }) {
  return (
    <section
      {...props}
      className={`img-bg ${className}`}
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="content">{children}</div>
    </section>
  );
}

export default ImgBG;
