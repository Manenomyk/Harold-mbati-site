import React from "react";
import "./Mission.css";
import * as mission from "react-bootstrap";
import youth from "../../Images/youth emp.jpg";
import Home from "../Home";

function Mission() {
  return (
    <div className="missionsection">
      <mission.Container className="missionContainer">
        <mission.Row>
          <div className="headline">
            <div>
              Our Mission
              <div className="underline mx-auto"></div>
            </div>
          </div>
          <mission.Carousel>
            <mission.Carousel.Item>
              <mission.Row>
                <mission.Col lg={5} className="mx-auto slide1cont">
                  <div className="youth">
                    <div>
                    <div className="youthhead">Mother and Child Care</div>
                    <div>content</div>
                    <button className="btn btn-success">LEARN MORE</button>
                    </div>
                    </div>
                  <div></div>
                  
                </mission.Col>
                <mission.Col lg={5} className="slide2image"></mission.Col>
              </mission.Row>
            </mission.Carousel.Item>
            <mission.Carousel.Item>
              <mission.Row>
              <mission.Col lg={5} className="slide1image"></mission.Col>

                <mission.Col lg={5} className="mx-auto slide1cont">
                  <div className="youth">
                    <div>
                    <div className="youthhead">Youth Empowerment</div>
                    <div>content</div>
                    <button className="btn btn-primary">LEARN MORE</button>
                    </div>
                    </div>
                  <div></div>
                  
                </mission.Col>
                
               
              </mission.Row>
            </mission.Carousel.Item>
            <mission.Carousel.Item>
              <mission.Row>
              <mission.Col lg={5} className="slide3image"></mission.Col>

                <mission.Col lg={5} className="mx-auto slide1cont">
                  <div className="youth">
                    <div>
                    <div className="youthhead">Gender Equality</div>
                    <div>content</div>
                    <button className="btn btn-primary">LEARN MORE</button>
                    </div>
                    </div>
                  <div></div>
                  
                </mission.Col>
                
              </mission.Row>
            </mission.Carousel.Item>
            <mission.Carousel.Item>
              <mission.Row>
                <mission.Col lg={5} className="mx-auto slide1cont">
                  <div className="youth">
                    <div>
                    <div className="youthhead">Empowerment of People Living with Disability</div>
                    <div>content</div>
                    <button className="btn btn-success">LEARN MORE</button>
                    </div>
                    </div>
                  <div></div>
                  
                </mission.Col>
                <mission.Col lg={5} className="slide4image"></mission.Col>
              </mission.Row>
            </mission.Carousel.Item>
            <mission.Carousel.Item>
              <mission.Row>
              <mission.Col lg={5} className="slide5image"></mission.Col>

                <mission.Col lg={5} className="mx-auto slide1cont">
                  <div className="youth">
                    <div>
                    <div className="youthhead">Schools Development</div>
                    <div>content</div>
                    <button className="btn btn-primary">LEARN MORE</button>
                    </div>
                    </div>
                  <div></div>
                  
                </mission.Col>
                
               
              </mission.Row>
            </mission.Carousel.Item>
            <mission.Carousel.Item>
              <mission.Row>
              <mission.Col lg={5} className="slide6image"></mission.Col>

                <mission.Col lg={5} className="mx-auto slide1cont">
                  <div className="youth">
                    <div>
                    <div className="youthhead">Sports</div>
                    <div>content</div>
                    <button className="btn btn-primary">LEARN MORE</button>
                    </div>
                    </div>
                  <div></div>
                  
                </mission.Col>
                
              </mission.Row>
            </mission.Carousel.Item>
          </mission.Carousel>
        </mission.Row>
      </mission.Container>
    </div>
  );
}

export default Mission;
