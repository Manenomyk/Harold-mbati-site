import React from "react";
import "./Mission.css";
import * as mission from "react-bootstrap";
import disable from "../../Images/disable.jpg";
import ball from "../../Images/i13.JPG";
import gender from "../../Images/genders.jpg";
import school from "../../Images/i4.jpg";
import moms from "../../Images/momy.jpg";
import youth from "../../Images/youth.jpg";

function Mission() {
  return (
    <div className="missionsection">
      <mission.Container className="missionContainer">
        <mission.Row>
          <div className="headline">
            <div>
              Our Main Focus
              <div className="underline mx-auto"></div>
            </div>
          </div>
          <mission.Carousel className="corousel">
            <mission.Carousel.Item>
              <mission.Row>
                <mission.Col lg={5} className="mx-auto slide1cont">
                  <div className="youth">
                    <div>
                      <div className="youthhead">
                        <h2>Mother and Child Care</h2>
                      </div>
                      <div>content</div>
                      <button className="btn btn-primary">Learn More</button>
                    </div>
                  </div>
                  <div></div>
                </mission.Col>
                <mission.Col lg={5} xs={8} className="mx-auto slide2image">
                  <mission.Image
                    className="d-block w-100"
                    src={moms}
                    alt="Mother child care"
                    fluid
                  />
                </mission.Col>
              </mission.Row>
            </mission.Carousel.Item>
            <mission.Carousel.Item>
              <mission.Row>
                <mission.Col lg={5} xs={8} className=" mx-auto slide1imae">
                  <mission.Image
                    className="d-block w-100"
                    src={youth}
                    alt="YOUTHSLIDE"
                    fluid
                  />
                </mission.Col>

                <mission.Col lg={5} className="mx-auto slide1cont">
                  <div className="youth">
                    <div>
                      <div className="youthhead">
                        <h2>Youth Empowerment</h2>
                      </div>
                      <div className="tag">
                        <b>“The world's biggest strength lies in the youth."</b>
                      </div>
                      <div className="info">
                        From education to entrepreneurship, young people are
                        slowly changing the community. At Harold Mbati
                        Foundation, we believe that the youth are catalysts for
                        development, and thus they deserve a space in the
                        community.
                      </div>
                      <button className="btn btn-primary">Learn More</button>
                    </div>
                  </div>
                  <div></div>
                </mission.Col>
              </mission.Row>
            </mission.Carousel.Item>

            <mission.Carousel.Item>
              <mission.Row>
                <mission.Col lg={6} className="mx-auto slide1cont">
                  <div className="youth">
                    <div>
                      <div className="youthhead">
                        <h2>People Living with Disability</h2>
                      </div>
                      <div>content</div>
                      <button className="btn btn-success">Learn More</button>
                    </div>
                  </div>
                  <div></div>
                </mission.Col>
                <mission.Col lg={5} xs={8} className="mx-auto slide4image">
                  <mission.Image
                    className="d-block w-100"
                    src={disable}
                    alt="disable SLIDE"
                    fluid
                  />
                </mission.Col>
              </mission.Row>
            </mission.Carousel.Item>
            <mission.Carousel.Item>
              <mission.Row>
                <mission.Col lg={5} xs={8} className="mx-auto slide5image">
                  <mission.Image
                    className="d-block w-100 ima"
                    src={school}
                    alt="school SLIDE"
                    fluid
                  />
                </mission.Col>

                <mission.Col lg={5} className="mx-auto slide1cont">
                  <div className="youth">
                    <div>
                      <div className="youthhead">
                        <h2>Schools Development</h2>
                      </div>
                      <div className="tag">
                        <b>
                          “Education is the movement from darkness to light.”
                        </b>
                      </div>
                      <div className="info">
                        Everyone has a right to education irrespective of their
                        status. Education is a key to a positive society. We
                        believe in not only just education but quality
                        education. Harold Mbati Foundation is aimed at ensuring
                        children get quality education in the society.
                      </div>
                      <button className="btn btn-primary">Learn More</button>
                    </div>
                  </div>
                  <div></div>
                </mission.Col>
              </mission.Row>
            </mission.Carousel.Item>
            <mission.Carousel.Item>
              <mission.Row>
                <mission.Col lg={5} xs={8} className=" mx-auto slide5image">
                  <mission.Image
                    className="d-block w-100 ima"
                    src={ball}
                    alt="games SLIDE"
                    fluid
                  />
                </mission.Col>

                <mission.Col lg={5} className="mx-auto slide1cont">
                  <div className="youth">
                    <div>
                      <div className="youthhead">Sports</div>
                      <div className="tag ">
                        <b>
                          "Persistence can change failure into extraordinary
                          achievement"
                        </b>
                      </div>
                      <div className="info">
                        HMF, through Harold Mbati Champions Cup, promotes the
                        role sport can play in creating sustainable social
                        change. We use the power of sports to unite and
                        transform lives by turning athletic ability into life
                        opportunities.
                      </div>
                      <button className="btn btn-primary">Learn More</button>
                    </div>
                  </div>
                  <div></div>
                </mission.Col>
              </mission.Row>
            </mission.Carousel.Item>
          </mission.Carousel>
        </mission.Row>
        <div>
          <hr />
          <mission.Row>
            <mission.Col lg={3} className="mx-auto text-center  colmiss1">
              <div>
                <div className="vishhead">Vission</div>
                <div className="underline mx-auto"></div>
                <div className="vish">
                  Promoting an enhanced socio-economic environment where
                  everyone can thrive
                </div>
              </div>
            </mission.Col>
            <mission.Col lg={3} className="mx-auto text-center colmiss1">
              <div>
                <div className="mishhead">Mission</div>
                <div className="underline mx-auto"></div>
                <div className="mish">
                  To impact the livelihoods of the people of Luanda Constituency
                  towards self-reliance
                </div>
              </div>
            </mission.Col>
          </mission.Row>
        </div>
      </mission.Container>
    </div>
  );
}

export default Mission;
