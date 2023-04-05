import React from "react";
import { Helmet } from "react-helmet";
import * as donate from "react-bootstrap";
import logo from "../../Images/logo.png";
import { MdDoubleArrow } from "react-icons/md";
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

      <donate.Container>
        <donate.Row>
          <donate.Col lg={4} className="mx-auto">
            <donate.Card>
              <donate.Card.Body>
                <div>
                <div>
                  <div>icon</div>
                  <div>By phone</div>
                  <div>
                    content
                  </div>
                </div>
                </div>
              </donate.Card.Body>
            </donate.Card>
          </donate.Col>
        </donate.Row>
      </donate.Container>
    </div>
  );
}

export default Donate;
