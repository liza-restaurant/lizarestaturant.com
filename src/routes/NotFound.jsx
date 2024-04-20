import notfound from "../assets/notfound.png";
import Button from "../components/Button";
import Title from "../components/Title";

function NotFound(props) {
  return (
    <div className="notfound flex justify-center flex-column align-center">
      {/* <Title title="Ooops! Page not found!" /> */}
      <img src={notfound} alt="not found" />
      <br />
      <Button width={100} to="/" title="Go Home" />
    </div>
  );
}

export default NotFound;
