import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';

import './IndexAbout.css';

export default class IndexAbout extends Component {
  render() {
    return (
      <div className = "about info">
          <div className = "about__content content">
              <div className = "about__title">
                  <h2 className = "about__content__title" >What is Smileycoin?</h2>
              </div>
              <div className = "about__text">
                  <p className = "about__content__text">The Smileycoin works just like other electronic currencies such as
                  Bitcoin, Litecoin or Dogecoin.
                  It was introduced as a reward to be used in an on-line educational system, the Tutor-Web.
                  </p>
                  <iframe  src="https://www.youtube.com/embed/hHUgIzEh_Wk" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
              <div className = "about__links">
                  <div className = "link__more link">
                      <Link to="/about">Learn more</Link>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}
