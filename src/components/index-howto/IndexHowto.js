import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import { Timeline } from 'react-twitter-widgets'

import './IndexHowto.css';


export default class IndexHowto extends Component {
  render() {
    return (
      <div className = "howto info">
          <div className = "howto__content content">
            <div>
                <h2 className = "howto__content__title">How can you get SMLY?</h2>
              <p className = "howto__content__text">There are a few ways to get some Smileycoins:</p>
              <div className = "list">
                  <Link to="/getstarted#easy" className = "list__item">
                      <div className = "list__img">
                          <img src={require('../../img/newdonation-color.svg')} alt="" className="icon"/>
                      </div>
                      <div className = "list__text">
                          <div className = "list__text__title">Easiest:</div>
                          <div className = "list__text__about">Donate to Education in a Suitcase</div>
                      </div>
                  </Link>
                  <Link to="/getstarted#work" className = "list__item">
                      <div className = "list__img">
                          <img src={require('../../img/withwork-color.svg')} alt="" className="icon"/>
                      </div>
                      <div className = "list__text">
                          <div className = "list__text__title">With work:</div>
                          <div className = "list__text__about">Get SMLY by studying in the tutor-web system</div>
                      </div>
                  </Link>
                  <Link to="/getstarted#long" className = "list__item">
                      <div className = "list__img">
                          <img src={require('../../img/exch.png')} alt="" className="icon"/>
                      </div>
                      <div className = "list__text">
                          <div className = "list__text__title">The long way:</div>
                          <div className = "list__text__about">Buy SMLY at a cryptocurrency exchange</div>
                      </div>
                  </Link>
                  <Link to="/getstarted#wind" className = "list__item">
                      <div className = "list__img">
                          <img src={require('../../img/atm.png')} alt="" className="icon"/>
                      </div>
                      <div className = "list__text">
                          <div className = "list__text__title">The Winding way:</div>
                          <div className = "list__text__about">The winding way: Use the SMLY ATM</div>
                      </div>
                  </Link>
              </div>
            </div>
            <div className="smileypage__sidebar">
                <Timeline
                dataSource={{
                    sourceType: 'profile',
                    screenName: 'smileycoinnews'
                }}
                options={{
                    username: 'SmileycoinNews',
                    height: '500',
                    width: '700%'
                }}
                />
                </div>
            </div>
      </div>
    );
  }
}
