import React from "react";
import "./../CSS/Header.css";
import {  Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class Header extends React.Component {
     onclickBtn = (message) => {
        alert(message);
      };
  render() {
    
    return (
      <div>
        <Row>
          <Col style={{ backgroundColor: "red" }} className="Header" onClick={() => this.onclickBtn("New Order")}>
            New Order
          </Col>
          <Col
            style={{
              backgroundColor: "blue",
            }}
            className="Header" onClick={() => this.onclickBtn("Qr Order")}
          >
            Qr Order
          </Col>
          <Col
            style={{
              backgroundColor: "green",
            }}
            className="Header" onClick={() => this.onclickBtn("On Going")}
          >
            On Going
          </Col>
          <Col
            style={{
              backgroundColor: "black",
            }}
            className="Header" onClick={() => this.onclickBtn("Kitchen Status")}
          >
            Kitchen Status
          </Col>
          <Col
            style={{
              backgroundColor: "greenyellow",
            }}
            className="Header" onClick={() => this.onclickBtn("Online Order")}
          >
            Online Order
          </Col>
          <Col
            style={{
              backgroundColor: "pink",
            }}
            className="Header" onClick={() => this.onclickBtn("Today Order")}
          >
            Today Order
          </Col>
        </Row>
      </div>
    );
  }
}

export default Header;
