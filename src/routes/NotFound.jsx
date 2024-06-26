import notfound from "../assets/notfound.png";
import Button from "../components/Button";
import Header from "../components/Header";

function NotFound(props) {
  return (
    <>
      <Header />
      <div className="notfound flex justify-center flex-column align-center">
        <img src={notfound} alt="not found" />
        <br />
        <Button width={100} to="/" title="Go Home" />
      </div>
    </>
  );
}

export default NotFound;
