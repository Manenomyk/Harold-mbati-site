import React from "react";
import "./Home.css";
import * as home from "react-bootstrap";
import logo from "../Images/logo.png";
import mom from "../Images/mother-child.jpg";
import img5 from "../Images/mbati5.jpg";
import Mission from "./Mission/Mission";

function Home() {
  return (
    <div>
      <div className="nav_section" id="nav_section">
        <home.Container className="nav_container">
          <home.Nav
            className="justify-content-end"
            variant="pills"
            defaultActiveKey="/"
          >
            <home.Nav.Item className="link_items">
              <home.Nav.Link href="/">Who We Are</home.Nav.Link>
            </home.Nav.Item>
            <home.Nav.Item className="link_items">
              <home.Nav.Link eventKey="link-1">How To Help</home.Nav.Link>
            </home.Nav.Item>
            <home.Nav.Item className="link_items">
              <home.Nav.Link eventKey="link-2">Contact Us</home.Nav.Link>
            </home.Nav.Item>
          </home.Nav>
        </home.Container>
      </div>

      <div className="carousel_section">
        <home.Container>
          <home.Row>
            <home.Col lg={5} className="mx-auto">
              <home.Image
                src={img5}
                className="d-block w-100"
                alt="Slide one"
                fluid
              />
            </home.Col>

            <home.Col lg={6} className="mx-auto sect1-image ">
              <div>
                <div className="welcome">Welcome to</div>
                <div className="title">Harold Mbati Foundation</div>
                <div className="content"></div>
                <button className="btn btn-success">LEARN MORE</button>
              </div>
            </home.Col>
          </home.Row>
        </home.Container>
      </div>

      <home.Container className="logo">
        <home.Row>
          <home.Col lg={3} className="logo_col">
            <home.Image src={logo} className="logo-img" />
          </home.Col>
        </home.Row>
      </home.Container>

      <div className="section2">
        <Mission />
      </div>
    </div>
  );
}

export default Home;
