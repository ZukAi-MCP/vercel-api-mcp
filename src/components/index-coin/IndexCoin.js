import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';

import './IndexCoin.css';

export default class IndexCoin extends Component {
  render() {
    return (
    <div className = "coin">
      <div className = "coin__content">
          <div className = "coin__content__title">
              <h2>Coin Information</h2>
          </div>
          <div className = "coin__content__info">
            <div className = "coin__content__info__img">
            <img src = {require('../../img/search.png')}></img>
            </div>
            <div className = "coin__content__text">
                <p>
                The SmileyCoin is a linked to several projects:
                <br></br>
                The <b>SmileyCoin Fund</b> is a fund to support educational efforts. 
                <br></br>
                The <b>tutor-web</b> rewards students for their performance using grants from the SmileyCoin Fund. 
                <br></br>
                In addition, the Fund will award grants to developers and entrepreneurs, who aim to use the Smileycoin in their systems or otherwise develop environments which lead to increased use of the SMLY.
                <br></br>
                <b>Education in a Suitcase</b> is a project run by the Smiley Charity, which receives automatic donations from SMLY miners. Some of these donations are paid forward.                 
                <br></br>
                Recipients include UNICEF Iceland and the African Maths Initiative.
                <br></br>
                
                </p>
            </div>
          </div>
          <div className = "about__links">
              <div className = "link__more coininfo">
                  <Link className = "" to="/coininfo">More details</Link>
              </div>
              <div className = "link__more whitepaper">
                <a href = "http://ledgerjournal.org/ojs/index.php/ledger/article/view/103/84">Whitepaper</a>
              </div>
          </div>
      </div>
    </div>
    );
  }
}
