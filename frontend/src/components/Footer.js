import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className={"text-center py3"}>CopyRight &copy; ProShop</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
