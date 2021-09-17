import React, { useState, useEffect } from "react";
// import {Row , Col} from 'antd'
import { Container ,Row , Col } from 'react-bootstrap'
import NewBar from './Components/NewBar/NewBar'
import NavBar from "./Components/NavBar/NavBar"
import Header from "./Components/Header/Header"
import RightSide from "./Components/RightSide/RightSide"
import TextSide from "./Components/TextSide/TextSide"
import './Main.css'

function Main() {
  return (
    <>  <Container>
          <Row className="mainBody">
            <Col xl={12}>
              {/* <NewBar/> */}
              <NavBar />
              <Header />
            </Col>
          </Row>
        </Container>
    </>
  );
}

export default Main;
