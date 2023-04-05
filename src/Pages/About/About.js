import React from "react";
import "./About.css";
import * as about from "react-bootstrap";
import logo from "../../Images/logo.png";
import Contact from "../Contact/Contact";
import { MdDoubleArrow } from "react-icons/md";
import youth from "../../Images/youth.svg";
import ball from "../../Images/ball.svg";
import school from "../../Images/school.svg";
import mom from "../../Images/mom.svg";
import { Helmet } from "react-helmet";

function About() {
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
        <about.Container className="nav_container">
          <about.Nav
            className="justify-content-end"
            variant="pills"
            defaultActiveKey="/"
          >
            <about.Nav.Item className="link_items">
              <about.Nav.Link id="linkitems" href="/">
                Home
              </about.Nav.Link>
            </about.Nav.Item>
            <about.Nav.Item className="link_items">
              <about.Nav.Link id="linkitems" href="#Contact" eventKey="link-2">
                Contact Us
              </about.Nav.Link>
            </about.Nav.Item>
            <about.Nav.Item className="link_items">
              <about.Nav.Link id="linkitems" href="/Donate" eventKey="link-3">
                Donate
              </about.Nav.Link>
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
          <about.Col lg={6} className="mx-auto mb-5">
            <div>
              <div className="about"></div>
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
                Our Pride and Aims
                <div className="underline4 mx-auto"></div>
              </div>
            </div>

            <about.Col lg={3} className="mx-auto mb-5">
              <div>
                <div className="spot">
                  <about.Image
                    src={youth}
                    className="d-block w-50"
                    alt="youth"
                  />
                </div>
                <div className="youthem">Youth Empowerment</div>
              </div>
            </about.Col>
            <about.Col lg={3} className="mx-auto mb-5">
              <div>
                <div className="spot">
                  <about.Image src={mom} className="d-block w-50" alt="youth" />
                </div>
                <div className="youthem">Mother Child Care</div>
              </div>
            </about.Col>
            <about.Col lg={3} className="mx-auto mb-5">
              <div>
                <div className="spot">
                  <about.Image
                    src={school}
                    className="d-block w-50"
                    alt="youth"
                  />
                </div>
                <div className="youthem">School Development</div>
              </div>
            </about.Col>
            <about.Col lg={3} className="mx-auto mb-5">
              <div>
                <div className="spot">
                  <about.Image
                    src={ball}
                    className="d-block w-50"
                    alt="youth"
                  />
                </div>
                <div className="youthem">Sports Development</div>
              </div>
            </about.Col>
          </about.Row>
        </about.Container>
        <about.Container>
          <hr />
          <about.Row>
            <about.Col lg={5} className="mx-auto">
              <hr />
              <div className="youthem"> Youth Empowerment</div>
              <div>
                From education to entrepreneurship, young people are slowly
                changing the community. At Harold Mbati Foundation, we believe
                that the youth are catalysts for development, and thus they
                deserve a space in the community.
                <br />
                <br /> As frontline youth advocacy and policy-oriented
                organization programming for Kenya. HMF provides a platform for
                young people to interact, learn, collaborate, and develop
                leadership and life skills and effect social change in the
                community.
              </div>
            </about.Col>
            <about.Col lg={5} className="mx-auto">
              <hr />
              <div className="youthem">Mother Child Care</div>
              <div>
                From education to entrepreneurship, young people are slowly
                changing the community. At Harold Mbati Foundation, we believe
                that the youth are catalysts for development, and thus they
                deserve a space in the community.
                <br />
                <br /> As frontline youth advocacy and policy-oriented
                organization programming for Kenya. HMF provides a platform for
                young people to interact, learn, collaborate, and develop
                leadership and life skills and effect social change in the
                community.
              </div>
            </about.Col>
          </about.Row>

          <hr />
          <about.Row>
            <about.Col lg={5} className="mx-auto">
              <hr />
              <div className="youthem">School Development</div>
              <div>
                Everyone has a right to education irrespective of their status.
                Education is a key to a positive society. We believe in not only
                just education but quality education. Harold Mbati Foundation is
                aimed at ensuring children get quality education in the society.
                We have a wide range of programs touching on education including
                but not limited to;
                <br />
                <br />
                <li>
                  <ul>
                    Provision of learning materials to students. <br />
                    <ol>
                      -This includes exercise and text books, geometrical sets,
                      pens and pencils. <br />
                    </ol>
                  </ul>
                  <ul>
                    Giving out school uniforms and shoes to the less fortunate
                    students. <br />
                  </ul>
                  <ul>
                    Donating sports equipment for co-curricular activities in
                    schools.
                  </ul>
                  <ul>Providing sanitary towels to girls in schools.</ul>
                </li>
                We are currently looking for partners and donors to ensure that
                our programs run efficiently and students get the best out of
                them.
              </div>
            </about.Col>
            <about.Col lg={5} className="mx-auto">
              <hr />
              <div className="youthem">Sports Development</div>
              <div>
                HMF, through Harold Mbati Champions Cup, promotes the role sport
                can play in creating sustainable social change. We use the power
                of sports to unite and transform lives by turning athletic
                ability into life opportunities.
                <br />
                <br /> Harold Mbati Foundation looks to center health, wellbeing
                and systemic solutions to the core of community recovery, and
                ensure that the youths within Luanda are not further
                disadvantaged. We are dedicated and committed to getting young
                people realize and make good use of their talents by providing
                them with guidance and opportunities to grow and succeed.
                <br />
                <br />
                Currently, we are looking for donors and partners to support and
                inspire our youths within Luanda realize and make good use of
                their talents.
              </div>
            </about.Col>
          </about.Row>
          <hr />
        </about.Container>
      </div>
      <about.Container className="missionstate">
        <about.Row>
          <about.Col lg={4} className="mx-auto mb-4">
            <div>
              <div className="youthem">
                <div>
                  Our Mission
                  <div className="underline5 mx-auto"></div>
                </div>
              </div>
              <div className="mx-auto text-center">
                To impact the livelihoods of the people of Luanda Constituency
                towards self-reliance
              </div>
            </div>
          </about.Col>
          <about.Col lg={4} className="mx-auto mb-4">
            <div>
              <div className="youthem">
                <div>
                  Our Vision
                  <div className="underline5 mx-auto"></div>
                </div>
              </div>
              <div className="mx-auto text-center">
                Promoting an enhanced socio-economic environment where everyone
                can thrive
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
  );
}

export default About;
