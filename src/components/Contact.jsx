import useQuery from "../utils/useQuery";
import Button from "./Button";
import Header from "./Header";
import ImgBG from "./ImgBG";
import Input from "./Input";
import Title from "./Title";

function Contact(props) {
  const query = useQuery();
  const type = query.get("type");
  return (
    <>
      <Header />
      <ImgBG>
        <section id="contact" className="container">
          <Title
            title={
              type === "table"
                ? "Book a Table"
                : type === "reservation"
                ? "Event Reservation"
                : "Contact Us"
            }
            subtitle="Contact"
          />
          <br />
          <div className="contact-form">
            <Input placeholder="Your Name" />
            <br />
            <Input placeholder="Your Email" />
            <br />
            {type ? (
              <>
                <Input placeholder="Date" type="date" />
                <br />
              </>
            ) : null}
            <Input
              textarea
              placeholder={type ? "Addtional note/message" : "Your Message"}
            />
            <br />
            <Button title="Send" width={150} />
          </div>
        </section>
      </ImgBG>
    </>
  );
}

export default Contact;
