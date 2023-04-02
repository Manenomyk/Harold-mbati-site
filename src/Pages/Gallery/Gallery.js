import React from "react";
import "./Gallery.css";
import * as gala from "react-bootstrap";
import logo from "../../Images/logo.png";
import Contact from "../Contact/Contact";
import i2 from "../../Images/i2.jpg";
import i3 from "../../Images/i3.jpg";
import i4 from "../../Images/i4.jpg";
import i5 from "../../Images/i5.jpg";
import i7 from "../../Images/i7.JPG";
import i8 from "../../Images/i8.JPG";
import i9 from "../../Images/i9.JPG";
import i10 from "../../Images/i10.JPG";
import i11 from "../../Images/i11.JPG";
import i12 from "../../Images/i12.JPG";
import i13 from "../../Images/i13.JPG";
import i6 from "../../Images/i6.jpg";

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
    <gala.Container className="galacont">
        <gala.Row className="mb-4">
            <gala.Col lg={3} className="mx-aoto ">
                <gala.Image
                src={i2}
                className="d-block w-100"
                alt="picture1"
                fluid
                />
            </gala.Col>
            <gala.Col lg={3} className="mx-aoto">
                <gala.Image
                src={i3}
                className="d-block w-100"
                alt="picture2"
                fluid
                />
            </gala.Col>
            <gala.Col lg={3} className="mx-aoto">
                <gala.Image
                src={i4}
                className="d-block w-100"
                alt="picture3"
                fluid
                />
            </gala.Col>
            <gala.Col lg={3} className="mx-aoto">
                <gala.Image
                src={i5}
                className="d-block w-100"
                alt="picture3"
                fluid
                />
            </gala.Col>
        </gala.Row>
        <gala.Row className="mb-4">
            <gala.Col lg={3} className="mx-aoto">
                <gala.Image
                src={i7}
                className="d-block w-100"
                alt="picture1"
                fluid
                />
            </gala.Col>
            <gala.Col lg={3} className="mx-aoto">
                <gala.Image
                src={i8}
                className="d-block w-100"
                alt="picture2"
                fluid
                />
            </gala.Col>
            <gala.Col lg={3} className="mx-aoto">
                <gala.Image
                src={i9}
                className="d-block w-100"
                alt="picture3"
                fluid
                />
            </gala.Col>
            <gala.Col lg={3} className="mx-aoto">
                <gala.Image
                src={i10}
                className="d-block w-100"
                alt="picture3"
                fluid
                />
            </gala.Col>
        </gala.Row>
        <gala.Row className="mb-4">
            <gala.Col lg={3} className="mx-aoto">
                <gala.Image
                src={i11}
                className="d-block w-100"
                alt="picture1"
                fluid
                />
            </gala.Col>
            <gala.Col lg={3} className="mx-aoto">
                <gala.Image
                src={i12}
                className="d-block w-100"
                alt="picture2"
                fluid
                />
            </gala.Col>
            <gala.Col lg={3} className="mx-aoto">
                <gala.Image
                src={i13}
                className="d-block w-100"
                alt="picture3"
                fluid
                />
            </gala.Col>
            <gala.Col lg={3} className="mx-aoto">
                <gala.Image
                src={i6}
                className="d-block w-100"
                alt="picture3"
                fluid
                />
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
