import { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import Title from "./Title";
import useNews from "../hooks/useNews";

function NewsLetter(props) {
  const [email, setEmail] = useState("");
  const { addEmail, isLoading } = useNews();

  const handleSubmit = () => addEmail({ email });

  return (
    <div className="newsletter">
      <Title title="Subscribe to Our Newsletter" subtitle="Newsletter" />
      <div className="form flex mobile-column">
        <Input
          defaultValue={email}
          onChange={setEmail}
          placeholder="Your email address"
        />
        <Button
          disabled={!email}
          onClick={handleSubmit}
          title={isLoading ? "Loading..." : "Submit"}
          width={100}
        />
      </div>
    </div>
  );
}

export default NewsLetter;
