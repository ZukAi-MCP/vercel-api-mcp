import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';

import './IndexTutor.css';

export default class IndexTutor extends Component {
  render() {
    return (
    <div className = "tutor">
      <div className = "tutor__content">
          <div className = "tutor__content__title">
            <img src = {require('../../img/tutor-web.png')} alt = ""></img>
              <h2>The Tutor Web</h2>
            <img src = {require('../../img/tutor-web.png')} alt = ""></img>
          </div>
          <div className = "tutor__content__text">
              <p>The tutor-web system is a completely open and freely accessible educational system, with an emphasis on mathematics and statistics. This system has been tested in Europe and Africa, in high schools and universities. It is most commonly used by students who need to practice difficult topics. This is done in an online drill based environment intended to promote learning. Often an instructor will point the students to this resource and may use the tutor-web grade as a course grade.
              </p>
          </div>
          <div className = "about__links">
              <div className = "link__more link">
                  <a href="https://tutor-web.net/">Tutor-Web</a>
              </div>
          </div>
      </div>
    </div>
    );
  }
}
