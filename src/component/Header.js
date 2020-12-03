import React from "react";
import "./../CSS/Header.css";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class Header extends React.Component {
  render() {
    return (
      <div>
          <Row>
            <Col style={{ backgroundColor: "red" }} className="Header">
              New Order
            </Col>
            <Col
              style={{
                backgroundColor: "blue",
              }}
              className="Header"
            >
              Qr Order
            </Col>
            <Col
              style={{
                backgroundColor: "green",
              }}
              className="Header"
            >
              On Going
            </Col>
            <Col
              style={{
                backgroundColor: "black",
              }}
              className="Header"
            >
              Kitchen Status
            </Col>
            <Col
              style={{
                backgroundColor: "greenyellow",
              }}
              className="Header"
            >
              Online Order
            </Col>
            <Col
              style={{
                backgroundColor: "pink",
              }}
              className="Header"
            >
              Today Order
            </Col>
          </Row>
      </div>
    );
  }
}

export default Header;
