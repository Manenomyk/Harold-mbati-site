import React from "react";
import "./Home.css";
import * as home from "react-bootstrap";
import logo from "../Images/logo.png";
import img5 from "../Images/mbati5.jpg";
import Mission from "./Mission/Mission";
import Contact from "./Contact/Contact";
import { FcDonate } from "react-icons/fc";
import { SiSololearn } from "react-icons/si";
import { MdSettingsSuggest } from "react-icons/md";
import { Helmet } from "react-helmet";

function Home() {
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
        <home.Container className="nav_container">
          <home.Nav
            className="justify-content-end"
            variant="pills"
            defaultActiveKey="/"
          >
            <home.Nav.Item className="link_items">
              <home.Nav.Link href="#Home">Who We Are</home.Nav.Link>
            </home.Nav.Item>
            <home.Nav.Item className="link_items">
              <home.Nav.Link href="#JoinUs" eventKey="link-1">
                How To Help
              </home.Nav.Link>
            </home.Nav.Item>
            <home.Nav.Item className="link_items">
              <home.Nav.Link href="#Contact" eventKey="link-2">
                Contact Us
              </home.Nav.Link>
            </home.Nav.Item>
            <home.Nav.Item className="link_items">
              <home.Nav.Link eventKey="link-3">Donate</home.Nav.Link>
            </home.Nav.Item>
          </home.Nav>
        </home.Container>
      </div>
      <a name="Home"></a>
      <div className="carousel_section">
        <home.Container>
          <home.Row>
            <home.Col lg={5} className="mx-auto mb-4">
              <home.Image
                src={img5}
                className="d-block w-100"
                alt="Slide one"
                fluid
              />
            </home.Col>

            <home.Col lg={6} xs={11} className="mx-auto sect1-image ">
              <div>
                <div className="welcome">Welcome to</div>
                <div className="title">Harold Mbati Foundation</div>
                <div className="content">
                  Harold Mbati Foundation is a private, not-for-profit
                  organization established in 2023 by Mr. Harold Mbati. HMF is
                  implementing development programs in Kenya bringing together
                  human, financial and technical resources to address some of
                  the challenges faced by the poorest and most marginalized
                  communities. Our focus is on food, health, water, quality
                  education, equality and economic opportunities. We invest in
                  human potential, expanding opportunities and improving quality
                  of life.
                </div>
                <button className="btn btn-success mt-4 mb-3">
                  Learn More
                </button>
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

      <div className="help">
        <a name="JoinUs"></a>
        <div className="headSection">
          <div>
            Be part of the great vision
            <div className="underline mx-auto"></div>
          </div>
        </div>

        <home.Container>
          <home.Row>
            <home.Col lg={6} className="mx-auto text-center share">
              <div className="topinfo">
                There are numerous ways you can help HMF bring change in the
                society in a meaningful way. Financial contribution,
                volunteering your time and donations are all welcomed.
              </div>
            </home.Col>
          </home.Row>
        </home.Container>
        <home.Container>
          <home.Row>
            <home.Col lg={4} className="mx-auto mb-2">
              <home.Card>
                <div className="icon1">
                  <SiSololearn />
                </div>

                <home.Card.Body>
                  <p className="advice" id="header">
                    Volunteering
                  </p>
                  <div>
                    <p className="advice">
                      Learn more about the challanges faced by the community
                    </p>
                    <p className="advice">#LearnAndShare</p>
                  </div>
                  <div className="advice">
                    <button className="btn btn-primary">Learn more</button>
                  </div>
                </home.Card.Body>
              </home.Card>
            </home.Col>
            <home.Col lg={4} className="mx-auto mb-2">
              <home.Card>
                <div className="icon">
                  <FcDonate />
                </div>
                <p className="advice" id="header">
                  Donations
                </p>
                <home.Card.Body>
                  <div>
                    <p className="advice">
                      Through your contributions, you make the programs run
                      swiftly
                    </p>
                    <p className="advice">#FeelGreatlyAppreciated</p>
                  </div>
                  <div className="advice">
                    <button className="btn btn-success">Make Donation</button>
                  </div>
                </home.Card.Body>
              </home.Card>
            </home.Col>
            <home.Col lg={4} className="mx-auto mb-2">
              <home.Card>
                <div className="icon2">
                  <MdSettingsSuggest />
                </div>
                <p className="advice" id="header">
                  Advisory and Suggestions
                </p>

                <home.Card.Body>
                  <div className="advice">
                    <div>
                      <p className="advice">
                        HMF is glad and willing to hear from you Share your
                        insights on how to improve our reach
                      </p>
                      <p className="advice">#YourOpinionIsValued</p>
                    </div>
                  </div>
                  <div className="advice">
                    <button className="btn btn-primary">Share your idea</button>
                  </div>
                </home.Card.Body>
              </home.Card>
            </home.Col>
          </home.Row>
        </home.Container>
      </div>

      <div className="ContactSection">
        <a name="Contact"></a>
        <Contact />
      </div>
    </div>
  );
}

export default Home;
