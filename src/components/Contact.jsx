import Button from "./Button";
import Header from "./Header";
import ImgBG from "./ImgBG";
import Input from "./Input";
import Title from "./Title";

function Contact(props) {
  return (
    <>
      <Header />
      <ImgBG>
        <section id="contact" className="container">
          <Title title="Contact Us" subtitle="Contact" />
          <br />
          <div className="contact-form">
            <Input placeholder="Your Name" />
            <br />
            <Input placeholder="Your Email" />
            <br />
            <Input textarea placeholder="Your Message" />
            <br />
            <Button title="Send" width={150} />
          </div>
        </section>
      </ImgBG>
    </>
  );
}

export default Contact;
