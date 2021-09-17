import React, { useState, useEffect } from "react";
// import {
//     Row,
//     Col,
// } from "antd"
import { Container ,Row , Col } from 'react-bootstrap'
import './NavBar.css'

function NavBar() {
  return (
    <>  <Container className="navBar">
            <Row className="mainHeader">
                <Col className="leftSide" xl={8}>
                    <div className="whiteTitle">
                        {/* <img width="130px" src="https://www.xstate.com/img/beta_logo.5ceb1b7e.svg"/> */}
                    </div>
                    <div className="whiteTitle">
                        Product
                    </div>
                    <div className="whiteTitle">
                        Features
                    </div>
                    <div className="whiteTitle">
                        MarketPlace
                    </div>
                    <div className="whiteTitle">
                        Company
                    </div>
                </Col>

                <Col className="rightSide" xl={4}>
                    <div className="whiteTitle">
                        Login
                    </div>
                    <div className="whiteTitle">
                        Start Free Trial
                    </div>
                </Col>

            </Row>
        </Container>
    </>
  );
}

export default NavBar;
