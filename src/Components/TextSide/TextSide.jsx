import React, { useState, useEffect } from "react";
import {
    Card,
    Button,
    Input,
} from 'antd'
import {
  Container,
  Row,
  Col
} from 'react-bootstrap'
import { RightOutlined } from '@ant-design/icons';
import './TextSide.css'

function TextSide() {
  return (
    <> <Container>
        <Row className="TextSide">
          <img className="ImageDisplaySmall" src="https://i.ibb.co/TMVgb4P/pngfind-com-cloud-storage-png-4250410.png"/>
          <Card bodyStyle={{ padding: "4px"}} className="customCard">
            <div className="whiteSmallText">
              <Button className="customButton" type="primary" shape="round" >We're Hiring</Button>
              Visit our careers page  <RightOutlined />
            </div>
          </Card>
          <div className="whiteBigText">
            A better way to
          </div>
          <div className="cyanBigText">
            ship web apps
          </div>
          <div className="whiteMediumText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Fusce blandit at augue non luctus. Phasellus id lacus egestas, 
          imperdiet felis a, euismod augue. Vestibulum tristique erat vitae 
          rutrum consectetur. Vestibulum tristique erat vitae 
          rutrum consectetur.
          </div>
          <div className="spacerBottom"/>
          <div className="spacerBottom"/>
          <div className="formEmail">
            <Input size="large" placeholder="Enter Your Email" />
            <div className="spacer"></div>
            <Button className="customButton" type="primary" size="large">Start Free Trial</Button>
          </div>
          <div className="spacerBottom"/>
          <div className="whiteMiniText">
            Start your free 14-day trial , no credit card necessary. By providing your email
            you agree to our <div className="whiteMiniBold">Terms &#38; Services</div>
          </div>
        </Row>
      </Container>
    </>
  );
}

export default TextSide;
