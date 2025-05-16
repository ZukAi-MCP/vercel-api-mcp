import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import { Timeline } from 'react-twitter-widgets'

import './About.css';

export default class About extends Component {
  render() {
    return (
      <section className="aboutpage">
      <div className = "heading info">
        <div className ="heading__content">
            <div className = "heading__img">
                <img src="smiley3.png" alt="Smileycoin"/>
            </div>
            <div className="heading__content__title">
                <div className="heading__content__title__title">
                    <p className = "title">About <b>Smiley</b>Coin</p>
                </div>
            </div>
        </div>
    </div>
  <div className = "smly">
    <div className = "smlyabout">
    <h1 className="smlyabout__title">About SmileyCoin</h1>
    <p>
SmileyCoin, launched on 2014-11-13, is designed for education and charity. Linked projects are (a) the tutor-web, a freely accessible educational system at http://tutor-web.net with SmileyCoin rewards and (b) Education in a Suitcase, distributes the tutor-web and other educational material on donated servers and tablets, to schools and students in low-income regions.
        <br/><br/>

Charity efforts are coordinated by the Smiley Charity, and the African Maths Initiative (AMI, Kenya), whereas technical development is coordinated from the University of Iceland and Shuttle Thread Ltd (England). These parties nominate members of the Board of the SmileyCoin Fund, which accepts grant applications for educational technologies.
        <br/><br/>
The SmileyCoin coinbase is split: miner receives 10%, and 45% become automatic donations in 10 income streams handled by the Smiley Charity and 45% are automatic dividends to addresses holding more than 25 M SMLY. The Smiley Charity pays parts forward to other charities such as UNICEF and AMI.
        <br/><br/>
        </p>
        <h2 className="smlyabout__subtitle">Education in a suitcase</h2>
        <p>
        A separate project, Education In A Suitcase, uses the tutor-web and SMLY on servers and tablet computers distributed to very low-income regions of Africa.
        <br/><br/>
        The picture shows an EIAS member handing out crowdfunded tablets to students at the primary school on the island of Takawiri in Lake Victoria. The island has no Internet nor general electricity, but one of the school buildings has solar panels which give unstable electricity. The unstable electricity is all it takes for the system to run. The server has a complete copy of the tutor-web along with all of (English) Wikipedia and the Khan Academy math videos
      </p>
      <img src ={require('../../img/kenya.jpg')} alt = "Image missing" class = "kenyaimg"></img>
      <p className = "smlyabout__link">
        If you want to learn even more about Smileycoin here is <br/>
        <a href="http://ledgerjournal.org/ojs/index.php/ledger/article/view/103/84">A peer-reviewed paper </a>
        describing the Smileycoin in more detail than you ever wanted to hear!
    </p>
    <h2 className="smlyabout__subtitle">More about smileycoin</h2>
    <ul class = "about__list">
      <li class = "about__list__item"><a href= "https://steemit.com/cryptocurrency/@gstefans/how-do-you-go-about-buying-cryptocurrency">An elaborate introduction to how to get into crypto</a></li>
      <li class = "about__list__item"><a href= "https://steemit.com/smileycoin/@gstefans/making-coins-from-coins-with-no-effort">An introduction to how the dividends work</a></li>
      <li class = "about__list__item"><a href= "https://steemit.com/blockchain/@gstefans/double-or-nothing-on-the-blockchain">More on the double-or-nothing game</a></li>
      <li class = "about__list__item"><a href= "https://steemit.com/education/@gstefans/why-would-one-invest-in-an-altcoin">An overview of why you might want to put real money into high-risk cryptocurrencies</a></li>
    </ul>
    <div className = "smlyabout__back">
      <Link to="/" className = "backLink">Go back</Link>
    </div>

  </div>
  </div>
      </section>
    );
  }
}
