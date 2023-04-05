import React from "react";
import { Helmet } from "react-helmet";
import * as donate from "react-bootstrap";
import logo from "../../Images/logo.png";
import { MdDoubleArrow } from "react-icons/md";
import './Donate.css';

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
    </div>
  );
}

export default Donate;
