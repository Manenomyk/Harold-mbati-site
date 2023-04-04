import React from "react";
import "./About.css";
import * as about from "react-bootstrap";
import logo from "../../Images/logo.png";
import Contact from "../Contact/Contact";
import { MdDoubleArrow } from "react-icons/md";
import youth from "../../Images/youth.jpg";
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
      <div className="topimagesect">
        <div className="topimage">
          <about.Container>
            <div className="abouttopdiv">
              <a href="/" className="tohome">
                Home <MdDoubleArrow />
              </a>
            </div>
            <div className="aboutcontdiv">About Us</div>
          </about.Container>
        </div>
      </div>

      <about.Container>
        <div className="mx-auto weare">
          <div>
            What we do
            <div className="underline2 mx-auto"></div>
          </div>
        </div>
        <about.Row>
          <about.Col lg={3}></about.Col>
        </about.Row>
      </about.Container>

      <about.Container className="aboutcontain">
        <about.Row>
          <about.Col lg={5} className="mx-auto">
            <about.Image
              src={logo}
              className="d-block w-100"
              fluid
              alt="logo image"
            />
          </about.Col>
          <about.Col lg={6} className="mx-auto">
            <div>
              <div className="about">About Us</div>
              <div className="underline3"></div>

              <div className="conten">
                Harold Mbati Foundation is a private, not-for-profit
                organization established in 2023 by Mr. Harold Mbati. HMF is
                implementing development programs in Kenya bringing together
                human, financial and technical resources to address some of the
                challenges faced by the poorest and most marginalized
                communities. Our focus is on food, health, water, quality
                education, equality and economic opportunities. We invest in
                human potential, expanding opportunities and improving quality
                of life.
              </div>
            </div>
          </about.Col>
        </about.Row>
      </about.Container>
      <div className="rdsection">
        <about.Container className="rdcontainer">
          <about.Row>
            <div className="aim">
              <div>
              Our Pride and Aim
              <div className="underline4 mx-auto"></div>
              </div>
              </div> 
            
            <about.Col lg={3} className="mx-auto">
                <div>
                  <div>
                    <about.Image src={youth} className="d-block w-100" alt="youth" />
                  </div>
                  <div className="youthem">
                    Youth Empowerment
                  </div>
                </div>
            </about.Col>
            <about.Col lg={3} className="mx-auto">
            <div>
                  <div>
                    <about.Image src={youth} className="d-block w-100" alt="youth" />
                  </div>
                  <div className="youthem">
                    Youth Empowerment
                  </div>
                </div>
            </about.Col>
            <about.Col lg={3} className="mx-auto">
              
            </about.Col>
            <about.Col lg={3} className="mx-auto">
              
            </about.Col>
          </about.Row>
        </about.Container>
      </div>

      <div className="ContactSection">
        <a name="Contact"></a>
        <Contact />
      </div>
    </div>
  );
}

export default About;
