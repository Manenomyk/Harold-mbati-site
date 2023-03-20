import React from "react";
import "./Contact.css";
import * as contact from "react-bootstrap";
import { IoCallSharp } from "react-icons/io5";
import { IoMdChatboxes } from "react-icons/io";

function Contact() {
  return (
    <div className="contact">
      <div className="contactsect1">
        <contact.Container>
          <contact.Row>
            <contact.Col lg={5} className="mx-auto">
              <div className="secttext">
                <div>
                  <div className="getintouch">Get in touch</div>
                  <div>
                    Want to get in touch? We'd love to hear from you. Here's how
                    to chat with a member of our team.
                  </div>
                </div>
              </div>
              <div></div>
            </contact.Col>

            <contact.Col lg={4} className="mx-auto sectimage"></contact.Col>
          </contact.Row>
        </contact.Container>
      </div>
      <contact.Container>
        <contact.Row>
          <contact.Col lg={4} className="mx-auto cont1">
            <div className="contents">
              <div>
                <div className="contaicon">
                  <IoCallSharp
                    style={{ fontSize: "28px", marginBottom: "1rem" }}
                  />
                </div>
                <div className="contahead">Reach us Via Phone</div>
                <div className="number">+254768 927895</div>
              </div>
            </div>
          </contact.Col>
          <contact.Col lg={4} className="mx-auto cont1">
            <div className="contents">
              <div>
                <div className="contaicon">
                  <IoMdChatboxes
                    style={{ fontSize: "28px", marginBottom: "1rem" }}
                  />
                </div>
                <div className="contahead">Reach us via Mail</div>
                <div className="number">info@hmbatifoundation.org</div>
              </div>
            </div>
          </contact.Col>
        </contact.Row>
        
      </contact.Container>
      <div className="footer">
        <contact.Row>
          <contact.Col></contact.Col>
        </contact.Row>
        </div>
    </div>
  );
}

export default Contact;
