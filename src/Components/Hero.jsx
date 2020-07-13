import React, { Component } from 'react';
import bg from '../assets/back.mp4';
import { Container, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import TeaserLightbox from './TeaserLightbox';

class Hero extends Component {
  state = { openLightbox: false };
  _openLightbox = (id, category) => {
    const openLightbox = !this.state.openLightbox;
    if (openLightbox) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'scroll';
    }
    this.setState({ openLightbox });
  };
  render() {
    return (
      <React.Fragment>
        <div className="video-container">
          <div className="herocontent">
            <Container>
              <h1>
                Esse é o movimento
                <br />
                para libertar o futuro
              </h1>
              <p>
                Traga suas cinco propostas, dispare perguntas,
                <br />
                imagine respostas para o futuro pós-pandemia
              </p>
              <Button
                color="danger"
                className="mr-3 animate__animated animate__headShake animate__delay-1s bounce animate__repeat-3"
                onClick={this._openLightbox}
              >
                Veja o teaser <i className="fa fa-play"></i>
              </Button>
              <Link to="/movimento">
                <Button color="dark" className="mr-3">
                  Conheça
                </Button>
              </Link>
              <Link to="/participe">
                <Button color="dark">Participe</Button>
              </Link>
            </Container>
          </div>
          <div className="overlay"></div>
          <video autoPlay muted loop>
            <source src={bg} type="video/mp4" />
          </video>
        </div>
        {this.state.openLightbox ? (
          <TeaserLightbox _openLightbox={this._openLightbox} />
        ) : (
          ''
        )}
      </React.Fragment>
    );
  }
}

export default Hero;
