import React from 'react';
import { Helmet } from 'react-helmet';
import * as donate from "react-bootstrap"

function Donate() {
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
        <donate.Container className="nav_container">
          <donate.Nav
            className="justify-content-end"
            variant="pills"
            defaultActiveKey="/"
          >
            <donate.Nav.Item className="link_items">
              <donate.Nav.Link id="linkitems" href="/">
                Home
              </donate.Nav.Link>
            </donate.Nav.Item>
            <donate.Nav.Item className="link_items">
              <donate.Nav.Link id="linkitems" href="#Contact" eventKey="link-2">
                Contact Us
              </donate.Nav.Link>
            </donate.Nav.Item>
          </donate.Nav>
        </donate.Container>
      </div>
    </div>
  )
}

export default Donate