import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class PageHero extends Component {
  state = {};
  render() {
    const { titulo, descricao, logo } = this.props;
    return (
      <div className="page_hero">
        <Container className="page_hero-content">
          <Row className="justify-content-center">
            <Col className="align-self-center" md="4" xl="3">
              <img src={logo} alt="" />
            </Col>
            <Col className="align-self-center" md="8" xl="9">
              <h1>{titulo}</h1>
              {descricao ? <p className="lead">{descricao}</p> : ''}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default PageHero;
