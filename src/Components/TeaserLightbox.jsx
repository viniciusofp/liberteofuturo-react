import React, { Component } from 'react';
import { Button } from 'reactstrap';
import _ from 'lodash';

class TeaserLightbox extends Component {
  state = {};
  render() {
    const { _openLightbox } = this.props;
    return (
      <div className="video_lightbox">
        <Button
          className="video_lightbox-button video_lightbox-button-close"
          onClick={_openLightbox}
        >
          <i className="fa fa-times"></i>
        </Button>
        <div className="video_lightbox-container">
          <video src="./assets/teaser.mp4" autoPlay controls></video>
        </div>
        <div className="video_lightbox-shadow" onClick={_openLightbox}></div>
      </div>
    );
  }
}

export default TeaserLightbox;
