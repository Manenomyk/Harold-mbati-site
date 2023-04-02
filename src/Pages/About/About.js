import React from 'react';
import './About.css';
import * as about from 'react-bootstrap';

function About() {
  return (
    <div>
      <div className="nav_section" id="nav_section">
        <about.Container className="nav_container">
          <about.Nav
            className="justify-content-end"
            variant="pills"
            defaultActiveKey="/"
          >
            <about.Nav.Item className="link_items">
              <about.Nav.Link href="#Home">Who We Are</about.Nav.Link>
            </about.Nav.Item>
            <about.Nav.Item className="link_items">
              <about.Nav.Link href="#JoinUs" eventKey="link-1">
                How To Help
              </about.Nav.Link>
            </about.Nav.Item>
            <about.Nav.Item className="link_items">
              <about.Nav.Link href="#Contact" eventKey="link-2">
                Contact Us
              </about.Nav.Link>
            </about.Nav.Item>
            <about.Nav.Item className="link_items">
              <about.Nav.Link eventKey="link-3">Donate</about.Nav.Link>
            </about.Nav.Item>
          </about.Nav>
        </about.Container>
      </div>
    </div>
  )
}

export default About