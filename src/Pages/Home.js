import React from "react";
import "./Home.css";
import * as home from "react-bootstrap";

function Home() {
  return (
    <div>
      <div className="nav_section">
        <home.Container className="nav_container">
          <home.Nav
            className="justify-content-end"
            variant="pills"
            defaultActiveKey="/home"
            
          >
            <home.Nav.Item className="link_items">
              <home.Nav.Link href="/home">Home</home.Nav.Link>
            </home.Nav.Item>
            <home.Nav.Item className="link_items">
              <home.Nav.Link eventKey="link-1">Who We Are</home.Nav.Link>
            </home.Nav.Item>
            <home.Nav.Item className="link_items">
              <home.Nav.Link eventKey="link-2" >
                How To Help
              </home.Nav.Link>
            </home.Nav.Item>
            <home.Nav.Item className="link_items">
              <home.Nav.Link eventKey="link-2" >
                Contact Us
              </home.Nav.Link>
            </home.Nav.Item>
          </home.Nav>
        </home.Container>
      </div>

      <div className="carousel_section"></div>
    </div>
  );
}

export default Home;
