import React from "react";
import { Helmet } from "react-helmet";
import * as donate from "react-bootstrap";
import logo from "../../Images/logo.png";
import { MdDoubleArrow } from "react-icons/md";
import pay from "../../Images/pay.svg";
import phone from "../../Images/phone.svg";
import bank from "../../Images/bank.svg";
import Contact from "../Contact/Contact";
import "./Donate.css";

function Donate() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Harold Mbati Foundation</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta
          name="description"
          content="Awesome resort you need to checkout"
        />
      </Helmet>
      <div className="nav_section" id="nav_section">
        <donate.Container className="nav_container">
          <donate.Nav
            className="justify-content-end"
            variant="pills"
            defaultActiveKey="/"
          >
            <donate.Nav.Item className="link_items">
              <donate.Nav.Link id="linkitems" href="/">
                Home
              </donate.Nav.Link>
            </donate.Nav.Item>
            <donate.Nav.Item className="link_items">
              <donate.Nav.Link id="linkitems" href="#Contact" eventKey="link-2">
                Contact Us
              </donate.Nav.Link>
            </donate.Nav.Item>
          </donate.Nav>
        </donate.Container>
      </div>
      <donate.Container className="logo">
        <donate.Row>
          <donate.Col lg={3} className="logo_col">
            <donate.Image src={logo} className="logo-img" />
          </donate.Col>
        </donate.Row>
      </donate.Container>
      <div className="topimagesect">
        <div className="topimage1">
          <donate.Container>
            <div className="abouttopdiv">
              <a href="/" className="tohome">
                Home <MdDoubleArrow />
              </a>
            </div>
            <div className="aboutcontdiv">Make Donation</div>
          </donate.Container>
        </div>
      </div>
      <donate.Container>
        <div className="mx-auto weare">
          <div>
            Ways to make Your Contribution
            <div className="underline3 mx-auto"></div>
          </div>
        </div>
        <donate.Row>
          <donate.Col lg={3}></donate.Col>
        </donate.Row>
      </donate.Container>

      <donate.Container className="donatesect">
        <donate.Row>
          <donate.Col lg={4} xs={8} className="mx-auto mb-4">
            <donate.Card>
              <donate.Card.Body>
                <div className="donateways">
                  <div>
                    <div className="donateicon">
                      <donate.Image
                        src={phone}
                        className="d-block w-50"
                        alt="Phone image"
                      />
                    </div>
                    <div className="payment">
                      <div>
                        Via M-pesa Send Money
                        <div className="underline0 mx-auto"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>content</div>
              </donate.Card.Body>
            </donate.Card>
          </donate.Col>
          <donate.Col lg={4} xs={8} className="mx-auto mb-4">
            <donate.Card>
              <donate.Card.Body>
                <div className="donateways">
                  <div>
                    <div className="donateicon">
                      <donate.Image
                        src={pay}
                        className="d-block w-50"
                        alt="Phone image"
                      />
                    </div>
                    <div className="payment">
                      <div>
                        Via M-pesa Paybill
                        <div className="underline0 mx-auto"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>content</div>
              </donate.Card.Body>
            </donate.Card>
          </donate.Col>
          <donate.Col lg={4} xs={8} className="mx-auto mb-4">
            <donate.Card>
              <donate.Card.Body>
                <div className="donateways">
                  <div>
                    <div className="donateicon">
                      <donate.Image
                        src={bank}
                        className="d-block w-50"
                        alt="Phone image"
                      />
                    </div>
                    <div className="payment">
                      <div>
                        Through Bank Transfer
                        <div className="underline0 mx-auto"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>content</div>
              </donate.Card.Body>
            </donate.Card>
          </donate.Col>
        </donate.Row>
      </donate.Container>
      <div className="ContactSection">
        <a name="Contact"></a>
        <Contact />
      </div>
    </div>
  );
}

export default Donate;
