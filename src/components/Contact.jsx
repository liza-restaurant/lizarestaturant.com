import { useState } from "react";
import useQuery from "../utils/useQuery";
import Button from "./Button";
import Header from "./Header";
import ImgBG from "./ImgBG";
import Input from "./Input";
import Title from "./Title";
import useContact from "../hooks/useContact";

function Contact(props) {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [kind, setKind] = useState("");
  const [date, setDate] = useState(new Date());
  const query = useQuery();
  const type = query.get("type");
  const { isLoading, sendMessages, sendReservation } = useContact();

  const handleSubmit = () => {
    if (type)
      return sendReservation({
        name,
        email,
        message,
        phoneNumber,
        kind: type,
        type: kind,
        date,
      });
    sendMessages({ name, email, message, phoneNumber });
  };

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
            <Input
              defaultValue={name}
              onChange={setName}
              placeholder="Your Name"
            />
            <br />
            <Input
              defaultValue={email}
              onChange={setEmail}
              placeholder="Your Email"
            />
            <br />
            <Input
              defaultValue={phoneNumber}
              onChange={setPhoneNumber}
              placeholder="Your Phone Number"
            />
            <br />
            {type &&
              (type === "reservation" ? (
                <>
                  <Input
                    onChange={setKind}
                    options={[
                      {
                        label: "Event Kind",
                        disabled: true,
                      },
                      {
                        label: "Party",
                        value: "party",
                      },
                      {
                        label: "Ceremony",
                        value: "ceremony",
                      },
                      {
                        label: "Meetings",
                        value: "meetings",
                      },
                    ]}
                    placeholder="Event Kind"
                  />
                  <br />
                </>
              ) : (
                <>
                  <Input
                    onChange={setKind}
                    options={[
                      {
                        label: "Table Kind",
                        disabled: true,
                      },
                      {
                        label: "Regular",
                        value: "regular",
                      },
                      {
                        label: "VIP",
                        value: "vip",
                      },
                    ]}
                    placeholder="Table Kind"
                  />
                  <br />
                </>
              ))}
            {type ? (
              <>
                <Input
                  defaultValue={date}
                  onChange={(v) => setDate(new Date(v))}
                  placeholder="Date"
                  type="date"
                />
                <br />
              </>
            ) : null}
            <Input
              defaultValue={message}
              onChange={setMessage}
              textarea
              placeholder={type ? "Addtional note/message" : "Your Message"}
            />
            <br />
            <Button
              onClick={handleSubmit}
              title={isLoading ? "Loading..." : "Send"}
              width={150}
            />
          </div>
        </section>
      </ImgBG>
    </>
  );
}

export default Contact;
