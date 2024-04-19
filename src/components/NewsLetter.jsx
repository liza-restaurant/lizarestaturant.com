import Button from "./Button";
import Input from "./Input";
import Title from "./Title";

function NewsLetter(props) {
  return (
    <div className="newsletter">
      <Title title="Subscribe to Our Newsletter" subtitle="Newsletter" />
      <div className="form flex mobile-column">
        <Input placeholder="Your email address" />
        <Button title="Submit" width={100} />
      </div>
    </div>
  );
}

export default NewsLetter;
