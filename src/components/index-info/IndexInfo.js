import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';

import './IndexInfo.css';
import './Modals.css';

export default class IndexTodo extends Component {

  componentDidMount() {
    document.addEventListener('click', function(e) {
      if (e.target.className == 'modal') e.target.style.display = 'none';
    });
  }

  displayModal(e) {
    var element = e.currentTarget;
    var modal = element.nextSibling;
    modal.style.display = "block";
  }

  hideModal(e) {
    e.target.parentNode.parentNode.style.display = "none";
  }

  render() {
    return (
      <div className="indexinfo">
        <div className = "cards">
            <Link to="/getstarted" className = "card">
                <div className = "card__icon">
                    <img src={require('../../img/rocket.svg')} alt=""/>
                </div>
                <div className = "card__text">
                    <div className = "card__text__title">Get started</div>
                    <div className = "card__text__description">Learn how to get Smileycoin and start using it</div>
                </div>
            </Link>

            <div className = "card community" onClick={this.displayModal}>
                <div className = "card__icon">
                    <img src={require('../../img/community.svg')} alt=""/>
                </div>
                <div className = "card__text">
                    <div className = "card__text__title">Community</div>
                    <div className = "card__text__description">Participate in the community</div>
                </div>
            </div>
            {/* The Community Modal */}
            <div className="modal">
                {/* Modal content*/}
                <div className="CommModal-content">
                  <span className="closeComm close" onClick={this.hideModal}>&times;</span>
                  <p>Our community!</p>
                  <ul>
                      <li><a href="https://bitcointalk.org/index.php?topic=845761.msg9431919#msg9431919">SmileyCoin on Bitcointalk</a> - General discussion about the SmileyCoin ecosystem, innovation and announcements </li>
                      <li><a href="https://twitter.com/smileycoinnews?lang=en">SmileyCoin twitter page</a> - News and announcements of SmileyCoin </li>
                      <li><a href="https://www.reddit.com/r/smileycoin/">Reddit</a> - Join our Reddit Community!</li>
                      <li><a href="https://t.me/joinchat/GD3HC0aN2bMysqCivQgmVw">Telegram</a> - SmileyCoin chatroom</li>
                  </ul>
                </div>
            </div>

            <div className = "card games" onClick={this.displayModal}>
                <div className = "card__icon">
                    <img src={require('../../img/game.svg')} alt=""/>
                </div>
                <div className = "card__text">
                    <div className = "card__text__title">SMLY games</div>
                    <div className = "card__text__description">Learn how to use the simple double-or-nothing game</div>
                </div>
            </div>
            {/* The Game Modal */}
            <div className="modal">
                  {/* Modal content*/}
                  <div className="GameModal-content">
                      <span className="closeGame close" onClick={this.hideModal}>&times;</span>
                        <p className = "GameModal-content__title">
                           The simplest game of all is the SMLY double-or-nothing game:
                        </p>
                        <p>
                        <br/>
                        Deposit any (small) amount of SMLY to the BEtZyyY address <code>BEtZyyYqDXqmRJJ45nnL15cuASfiXg9Yik</code> and you will automatically participate in a double-or-nothing game.
                        <br/><br/>
                        If you are on a Windows, Linux or Mac computer then the easiest way to do this is in the Console window, where you can give commands of the form:
                        <br/><br/>
                        <code>
                            sendtoaddress BEtZyyYqDXqmRJJ45nnL15cuASfiXg9Yik 20
                        </code>
                        <br/><br/>
                        repeatedly and see how you sometimes get the double back and sometimes nothing.
                      </p>
                  </div>
              </div>
        </div>
        <hr></hr>
        <div className = "credits">
        <p className="credit__authors">Website Design by <a href="https://github.com/Bragiar" target="_blank">Bragi Arnarson</a>.</p>
        <div>Icons made by <a href="https://www.flaticon.com/authors/dave-gandy" title="Dave Gandy">Dave Gandy</a>,
        <a href="https://www.freepik.com/" title="Freepik">Freepik</a>,
        <a href="https://www.flaticon.com/authors/good-ware" title="Good Ware">Good Ware</a>,
        <a href="https://www.flaticon.com/authors/payungkead" title="Payungkead"> Payungkead</a>,
        <a href="https://www.flaticon.com/authors/eucalyp" title="Eucalyp"> Eucalyp</a>,
        <a href="https://www.flaticon.com/authors/smashicons" title="SmashIcons"> SmashIcons </a> and
        <a href="https://www.flaticon.com/authors/baianat" title="Baianat"> Baianat </a>from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
        <img className = "cryptocompare" src={require('../../img/cryptocompare.jpg')} alt= "Powered by CryptoCompare"></img>
        </div>
      </div>
    )
  }
}
