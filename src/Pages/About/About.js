import React from 'react';
import './About.css';
import * as about from 'react-bootstrap';
import logo from "../../Images/logo.png";
import Contact  from '../Contact/Contact';
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
              <about.Nav.Link href="/">Home</about.Nav.Link>
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
      <about.Container className="logo">
        <about.Row>
          <about.Col lg={3} className="logo_col">
            <about.Image src={logo} className="logo-img" />
          </about.Col>
        </about.Row>
      </about.Container>
      <div className='topimagesect'>
        <div className='topimage'>
          
        </div>
      </div>
      <about.Container className='aboutcontain'>
        <about.Row>
          <about.Col lg={5} className='mx-auto'>
            <about.Image 
            src={logo} 
            className='d-block w-100'
            fluid
            alt='logo image'
            />
          </about.Col>
          <about.Col lg={5} className='mx-auto'>
          <div>
                <div className="about">About Us</div>
                <div className="underline1"></div>
                
                <div className="conten">
                  We are a not-for-profit organization implementing development
                  programs in Kenya bringing together human, financial and
                  technical resources to address some of the challenges faced by
                  the poorest and most marginalized communities.
                </div>
              </div>
          </about.Col>
        </about.Row>
      </about.Container>

      <div className="ContactSection">
        <a name="Contact"></a>
        <Contact />
      </div>
    </div>
  )
}

export default About