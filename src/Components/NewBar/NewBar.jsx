import React, { useState, useEffect } from "react";
// import {
//     Row,
//     Col,
// } from "antd"
import { Container ,Row , Col } from 'react-bootstrap'

function NewBar() {
  return (
    <> 
        <Container>
            <Row>
                <Col xl={8}>
                    Test
                </Col>
                <Col xl={4}>
                    123
                </Col>
            </Row>
        </Container>
    </>
  );
}

export default NewBar;
