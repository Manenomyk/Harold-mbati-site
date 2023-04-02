import React from "react";
import "./Gallery.css";
import * as gala from "react-bootstrap";
import logo from "../../Images/logo.png";
import Contact from "../Contact/Contact";

function Gallery() {
  return (
    <div>
      <div className="nav_section" id="nav_section">
        <gala.Container className="nav_container">
          <gala.Nav
            className="justify-content-end"
            variant="pills"
            defaultActiveKey="/"
          >
            <gala.Nav.Item className="link_items">
              <gala.Nav.Link href="/">Who We Are</gala.Nav.Link>
            </gala.Nav.Item>
            <gala.Nav.Item className="link_items">
              <gala.Nav.Link href="/" eventKey="link-1">
                How To Help
              </gala.Nav.Link>
            </gala.Nav.Item>
            <gala.Nav.Item className="link_items">
              <gala.Nav.Link href="#Contact" eventKey="link-2">
                Contact Us
              </gala.Nav.Link>
            </gala.Nav.Item>
            <gala.Nav.Item className="link_items">
              <gala.Nav.Link eventKey="link-3">Donate</gala.Nav.Link>
            </gala.Nav.Item>
          </gala.Nav>
        </gala.Container>
      </div>
      <gala.Container className="logo">
        <gala.Row>
          <gala.Col lg={3} className="logo_col">
            <gala.Image src={logo} className="logo-img" />
          </gala.Col>
        </gala.Row>
      </gala.Container>

      <div className="ContactSection">
        <a name="Contact"></a>
        <Contact />
      </div>
    </div>
  );
}

export default Gallery;
