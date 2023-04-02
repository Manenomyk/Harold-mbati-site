import React from 'react'
import './Gallery.css';
import * as gala from 'react-bootstrap';
function Gallery() {
  return (
    <div>
         <div className="nav_section" id="nav_section">
        <gala.Container className="nav_container">
          <gala.Nav
            className="justify-content-end"
            variant="pills"
            defaultActiveKey="/"
          >
            <gala.Nav.Item className="link_items">
              <gala.Nav.Link href="/">Who We Are</gala.Nav.Link>
            </gala.Nav.Item>
            <gala.Nav.Item className="link_items">
              <gala.Nav.Link href="#JoinUs" eventKey="link-1">
                How To Help
              </gala.Nav.Link>
            </gala.Nav.Item>
            <gala.Nav.Item className="link_items">
              <gala.Nav.Link href="#Contact" eventKey="link-2">
                Contact Us
              </gala.Nav.Link>
            </gala.Nav.Item>
            <gala.Nav.Item className="link_items">
              <gala.Nav.Link eventKey="link-3">Donate</gala.Nav.Link>
            </gala.Nav.Item>
          </gala.Nav>
        </gala.Container>
      </div>
    </div>
  )
}

export default Gallery