import React from "react";
import "./Home.css";
import * as home from "react-bootstrap";
import logo from "../Images/logo.png";
import share from "../Images/share.svg";
import img5 from "../Images/mbati5.jpg";
import Mission from "./Mission/Mission";
import Contact from "./Contact/Contact";
import { FcDonate } from "react-icons/fc";
import { SiSololearn } from "react-icons/si";
import { MdSettingsSuggest } from "react-icons/md";
import { Helmet } from "react-helmet";
import * as rev from "react-reveal";
import { MdDoubleArrow } from "react-icons/md";

function MyVerticallyCenteredModal(props) {
  return (
    <home.Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      id="imagemodal"
    >
      <home.Modal.Header closeButton>
        <home.Modal.Title id="contained-modal-title-vcenter"></home.Modal.Title>
      </home.Modal.Header>
      <home.Modal.Body>
        <home.Image src="../../Images/i6.jpg" className="ala" alt="image" />
      </home.Modal.Body>
      {/* <home.Modal.Footer></home.Modal.Footer> */}
    </home.Modal>
  );
}

function Home() {
  document.addEventListener("click", function (e) {
    if (e.target.classList.contains("imagegala")) {
      const src = e.target.getAttribute("src");
      console.log(src);
      // document.querySelector(".ala").src = src;
      // const myModal = new gala.Modal(document.getElementById('imagemodal'));
      // myModal.show();
    }
  });
  const [modalShow, setModalShow] = React.useState(false);
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
              <home.Nav.Link id="linkitems" href="/">
                Who We Are
              </home.Nav.Link>
            </home.Nav.Item>
            <home.Nav.Item className="link_items">
              <home.Nav.Link id="linkitems" href="#JoinUs" eventKey="link-1">
                How To Help
              </home.Nav.Link>
            </home.Nav.Item>
            <home.Nav.Item className="link_items">
              <home.Nav.Link id="linkitems" href="#Contact" eventKey="link-2">
                Contact Us
              </home.Nav.Link>
            </home.Nav.Item>
            <home.Nav.Item className="link_items">
              <home.Nav.Link id="linkitems" href="/Gallery" eventKey="link-3">
                Gallery
              </home.Nav.Link>
            </home.Nav.Item>
            <home.Nav.Item className="link_items">
              <home.Nav.Link id="linkitems" href="/Donate" eventKey="link-4">
                Donate
              </home.Nav.Link>
            </home.Nav.Item>
          </home.Nav>
        </home.Container>
      </div>
      <a name="Home"></a>
      <div className="firstsection">
        <rev.Slide top delay={200}>
          {/* <home.Carousel>
            <home.CarouselItem className="carousel_section bg-img"></home.CarouselItem>
            <home.CarouselItem className="carousel_section bg-img1"></home.CarouselItem>
            <home.CarouselItem className="carousel_section bg-img2"></home.CarouselItem>
            <home.CarouselItem className="carousel_section bg-img3"></home.CarouselItem>
            <home.CarouselItem className="carousel_section bg-img4"></home.CarouselItem>
          </home.Carousel> */}
          <div className="topimagesect11">
            <div className="topimage11">
              {/* <home.Container>
                <div className="abouttopdiv">
                  <a href="/" className="tohome">
                    Home <MdDoubleArrow />
                  </a>
                </div>
                <div className="aboutcontdiv">About Us</div>
              </home.Container> */}
            </div>
          </div>
        </rev.Slide>
        <home.Container>
          <home.Row>
            <home.Col lg={6} xs={11} className="mx-auto sect1-image ">
              <rev.Zoom>
                <div>
                  <div className="welcome">Welcome to</div>
                  <div className="title">Harold Mbati Foundation</div>
                  <div className="homebtn">
                    <button className="btn btn-success mt-4 mb-3 ">
                      <a
                        href="/about"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Know Us More
                      </a>
                    </button>
                  </div>
                </div>
              </rev.Zoom>
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

        <home.Container className="mb-4">
          <home.Row>
            <home.Col lg={5} className="mx-auto share">
              <div className="topinfo">
                There are numerous ways you can help HMF bring change in the
                society in a meaningful way. Financial contribution,
                volunteering your time and donations are all welcomed.
              </div>
            </home.Col>
            <home.Col lg={4} className="mx-auto imgcol">
              <home.Image
                src={share}
                className="d-block share_img"
                alt="Slide one"
                fluid
              />
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
                    <p className="advice text-center">
                      We are glad to invite you to partner with us through your
                      time and service
                    </p>
                    <p className="advice">#WeValueYourSacrifice</p>
                  </div>
                  <div className="advice">
                    <button className="btn btn-primary">Reach Us Out</button>
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
                    <p className="advice text-center">
                      Through your contributions, you make the programs run
                      swiftly
                    </p>
                    <p className="advice">#FeelGreatlyAppreciated</p>
                  </div>
                  <div className="advice">
                    <a href="/Donate">
                      <button className="btn btn-success">Make Donation</button>
                    </a>
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
                  Your Contributions
                </p>

                <home.Card.Body>
                  <div className="advice">
                    <div>
                      <p className="advice text-center">
                        HMF is glad and willing to hear from you. Share your
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
