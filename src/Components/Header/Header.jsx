
import React, { useState, useEffect } from "react";
import {
    Container,
    Row,
    Col,
} from "react-bootstrap"
import TextSide from "../TextSide/TextSide";
import RightSide from "../RightSide/RightSide";
import './Header.css'

function Header() {
    return (
        <>  <Container>
                <Row className="landingBody" >
                    {/* <div className="landingBody"> */}
                    <Col xl={6}>
                        <TextSide />
                    </Col>
                    <Col className='ImageDisplay' xl={6}>
                        <RightSide />
                    </Col>
                    {/* </div> */}
                </Row>
            </Container>
        </>
    );
}

export default Header;
