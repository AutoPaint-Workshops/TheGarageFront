import { Container, Row, Col, Card, Form } from "react-bootstrap";

import { Continue } from "../components/car";
import { Divisor } from "../components/car/Divisor";
import { Description } from "../components/car/Description";
import CardElements from "../components/car/CardElements";
import CarCheckout from "../components/car/CarCheckout";

export const ShoppingCart = () => {
  return (
    <section>
      <Container className="pt-5">
        <Row className="d-flex justify-content-center align-items-center h-100">
          <Col>
            <Card>
              <Card.Body className="p-4">
                <Row>
                  <Col lg={8}>
                    <Continue />

                    <Divisor />
                    <Description />
                    <CardElements />
                  </Col>
                  <Col lg={4}>
                    <CarCheckout />
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
