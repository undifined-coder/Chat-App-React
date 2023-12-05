import React from "react";
import ContactLastMessage from "./message-last";
import { Link } from "react-router-dom";

export function Avatar({ image }) {
  return (
    <div>
      <img src={image} alt="user-avatar" className="avatar" />
    </div>
  );
}

export function ContactName({ name }) {
  return (
    <div>
      <p style={styles.contactText}>{name}</p>
    </div>
  );
}
const styles = {
  contactText: {
    fontSize: "20px",
    color: "#000",
    marginBottom: "3px",
  },
};


function ContactTab(props) {
  const { image, name, chatlog, id } = props.contact;

  let length = chatlog.length;

  const noMessage = {
    text: " 0 message Start conversation now!",
  };
  return (
    <Link to={`/conversations/${id}`} className="link-tag">
      <div className="contact-tab" s>
        <div>
          {" "}
          <Avatar image={image} />
        </div>

        <div style={{ marginLeft: "16px" }}>
          <ContactName name={name} />

          <ContactLastMessage
            chatlog={length > 0 ? chatlog[length - 1] : noMessage}
          />
        </div>
      </div>
    </Link>
  );
}

export default ContactTab;