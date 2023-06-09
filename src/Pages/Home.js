import React, { useRef, useState } from "react";
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
import emailjs from "emailjs-com";
import { FaBars } from "react-icons/fa";

function MyVerticallyCenteredModal(props) {
  const [successResponce, setSuccessResponce] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qk3ecbi",
        "template_h2a286a",
        form.current,
        "KFsuGcuTAtVQTcEYG"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
    setSuccessResponce("Message sent successfully");
    setTimeout(() => {
      setSuccessResponce("");
    }, 2000);
  };
  return (
    <home.Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <home.Modal.Header closeButton>
        <home.Modal.Title id="contained-modal-title-vcenter"></home.Modal.Title>
      </home.Modal.Header>
      <home.Modal.Body>
        <div>
          Full Name
          <input
            className="form-control shadow-none mb-4"
            name="name"
            placeholder="Enter your name"
            type="text"
          />
        </div>
        <div>
          Email Adress
          <input
            className="form-control shadow-none mb-4"
            name="email"
            placeholder="Enter Email Address"
            type="email"
          />
        </div>
        <div>
          Voluteer/Contributor message
          <textarea
            rows={4}
            className="form-control shadow-none mb-4"
            name="massage"
            placeholder="Share your message"
            type="text"
          />
        </div>
      </home.Modal.Body>
      <home.Modal.Footer>
        <div>
          <button type="submit" className="btn btn-primary">
            Send message
          </button>
        </div>
      </home.Modal.Footer>
    </home.Modal>
  );
}

function Home() {
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
      <div className="navdiv">
        <nav>
          <input type="checkbox" id="check" />
          <label htmlFor="check" className="checkbtn">
            <FaBars />
          </label>
          <label className="loo" htmlFor="">
            <home.Image src={logo} className="logimg" fluid alt="imaga logo" />
          </label>

          <ul className="navdet">
            <li>
              <a className="active" href="/">
                Who We Are
              </a>
            </li>
            <li>
              <a href="#JoinUs">How To Help</a>
            </li>
            <li>
              <a href="/Gallery">Gallery</a>
            </li>
            <li>
              <a href="#Contact">Contact</a>
            </li>
            <li>
              <a href="/Donate">Donate</a>
            </li>
          </ul>
        </nav>
      </div>
      <a name="Home"></a>
      <div className="firstsection">
        <rev.Slide top delay={200}>
          <div className="topimagesect11">
            <div className="topimage11"></div>
          </div>
        </rev.Slide>
        <home.Container>
          <home.Row>
            <home.Col
              lg={6}
              sm={12}
              xs={11}
              md={10}
              className="mx-auto sect1-image "
            >
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
                    {/* <button className="btn btn-primary">Reach Us Out</button> */}
                    <home.Button
                      variant="primary"
                      onClick={() => setModalShow(true)}
                    >
                      Reach Us Out
                    </home.Button>

                    <MyVerticallyCenteredModal
                      show={modalShow}
                      onHide={() => setModalShow(false)}
                    />
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
                    {/* <button className="btn btn-primary">Share your idea</button> */}
                    <home.Button
                      variant="primary"
                      onClick={() => setModalShow(true)}
                    >
                      Share your idea
                    </home.Button>

                    <MyVerticallyCenteredModal
                      show={modalShow}
                      onHide={() => setModalShow(false)}
                    />
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
