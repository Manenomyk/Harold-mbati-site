import React from "react";
import "./Home.css";
import * as home from "react-bootstrap";
import logo from "../Images/logo.png";
import img5 from "../Images/mbati5.jpg";
import Mission from "./Mission/Mission";
import Contact from "./Contact/Contact";

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
            <home.Nav.Item className="link_items">
              <home.Nav.Link eventKey="link-3">Donate</home.Nav.Link>
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
                <div className="content">
                Harold Mbati Foundation is a private, not-for-profit organization 
                established in 2023 by Mr. Harold Mbati. HMF is implementing 
                development programs in Kenya bringing together human, financial
                 and technical resources to address some of the challenges
                  faced by the poorest and most marginalized communities.
                   Our focus is on food, health, water, quality education, 
                   equality and economic opportunities.
                 We invest in human potential, expanding opportunities and improving quality of life.
                </div>
                <button className="btn btn-success mt-4 mb-3">Learn More</button>
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

      <div className="ContactSection">
        <Contact/>
      </div>
    </div>
  );
}

export default Home;
