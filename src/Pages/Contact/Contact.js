import React from "react";
import "./Contact.css";
import * as contact from "react-bootstrap";
import { IoCallSharp } from "react-icons/io5";
import { IoMdChatboxes } from "react-icons/io";
import { BsFacebook } from "react-icons/bs";

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
          <contact.Col lg={3} className="mx-auto cont1">
            <div className="contents">
              <div>
                <div className="contaicon">
                  <BsFacebook
                    style={{ fontSize: "28px", marginBottom: "1rem" }}
                  />
                </div>
                <div className="contahead">Follow us on Facebook</div>
                <div className="number">
                  <a
                    href="https://www.facebook.com/profile.php?id=100090150282008&mibextid=ZbWKwL"
                    target="_blank"
                  >
                    <button className="btn btn-primary">Facebook</button>
                  </a>
                </div>
              </div>
            </div>
          </contact.Col>
          <contact.Col lg={3} className="mx-auto cont1">
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
          <contact.Col lg={3} className="mx-auto cont1">
            <div className="contents">
              <div>
                <div className="contaicon">
                  <IoMdChatboxes
                    style={{ fontSize: "28px", marginBottom: "1rem" }}
                  />
                </div>
                <div className="contahead">Reach us via Mail</div>
                <div className="number">
                  <a href="mailto: info@hmbatifoundation.org" target="_black">
                    <button className="btn btn-success">Send Mail</button>
                  </a>
                </div>
              </div>
            </div>
          </contact.Col>
        </contact.Row>
      </contact.Container>
      <div className="footer">
        <contact.Container>
          <div className="copy">
            <a href="https://bahaticodes.web.app" className="link">
              &copy; BahatiCodes
            </a>
          </div>
        </contact.Container>
      </div>
    </div>
  );
}

export default Contact;
