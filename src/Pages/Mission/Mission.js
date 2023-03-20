import React from "react";
import "./Mission.css";
import * as mission from "react-bootstrap";
import disable from '../../Images/disable.jpg';
import games from '../../Images/sport.jpg';
import gender from '../../Images/genders.jpg';
import school from '../../Images/school2.jpg';
import moms from '../../Images/momy.jpg';
import youth from '../../Images/youth.jpg';

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
          <mission.Carousel>
            <mission.Carousel.Item>
              <mission.Row>
                <mission.Col lg={5} className="mx-auto slide1cont">
                  <div className="youth">
                    <div>
                    <div className="youthhead"><h2>Mother and Child Care</h2></div>
                    <div>content</div>
                    <button className="btn btn-primary">Learn More</button>
                    </div>
                    </div>
                  <div></div>
                  
                </mission.Col>
                <mission.Col lg={5} className="slide2image">
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
              <mission.Col lg={5} className="slide1imae">
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
                    <div className="youthhead"><h2>Youth Empowerment</h2></div>
                    <div>content</div>
                    <button className="btn btn-primary">Learn More</button>
                    </div>
                    </div>
                  <div></div>
                  
                </mission.Col>
                
               
              </mission.Row>
            </mission.Carousel.Item>
            <mission.Carousel.Item>
              <mission.Row>
              <mission.Col lg={5} className="slide3image">
              <mission.Image 
                  className="d-block w-100"
                  src={gender}
                  alt="gender SLIDE"
                  fluid 
                />
              </mission.Col>

                <mission.Col lg={5} className="mx-auto slide1cont">
                  <div className="youth">
                    <div>
                    <div className="youthhead"><h2>Gender Equality</h2></div>
                    <div>content</div>
                    <button className="btn btn-success">Learn More</button>
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
                    <div className="youthhead"><h2>Empowerment of People Living with Disability</h2></div>
                    <div>content</div>
                    <button className="btn btn-success">Learn More</button>
                    </div>
                    </div>
                  <div></div>
                  
                </mission.Col>
                <mission.Col lg={5} className="slide4image">
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
              <mission.Col lg={5} className="slide5image">
              <mission.Image 
                  className="d-block w-100"
                  src={school}
                  alt="school SLIDE"
                  fluid
                />
              </mission.Col>

                <mission.Col lg={5} className="mx-auto slide1cont">
                  <div className="youth">
                    <div>
                    <div className="youthhead"><h2>Schools Development</h2></div>
                    <div>content</div>
                    <button className="btn btn-primary">Learn More</button>
                    </div>
                    </div>
                  <div></div>
                  
                </mission.Col>
                
               
              </mission.Row>
            </mission.Carousel.Item>
            <mission.Carousel.Item>
              <mission.Row>
              <mission.Col lg={5} className="slide6image">
              <mission.Image 
                  className="d-block w-100"
                  src={games}
                  alt="games SLIDE"
                  fluid
                />
              </mission.Col>

                <mission.Col lg={5} className="mx-auto slide1cont">
                  <div className="youth">
                    <div>
                    <div className="youthhead">Sports</div>
                    <div>content</div>
                    <button className="btn btn-success">Learn More</button>
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
