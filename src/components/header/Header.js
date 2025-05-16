import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Header.css';
import Coins from '../coins';

export default class Header extends Component {
  state = { listOpen: false }

  toggleList() {
    this.setState(prevState => ({
      listOpen: !prevState.listOpen
    }))
  }

  componentDidMount() {
    document.addEventListener('click', function(e) {
      if (e.target.className == 'modal') e.target.style.display = 'none';
    });
  }

  displayModal(type) {
    var modal = document.getElementById(type)
    if (modal) {
      modal.style.display = "block";
    }
  }

  hideModal(e) {
    e.target.parentNode.parentNode.style.display = "none";
  }

  render() {
    const { listOpen } = this.state;
    const { data, loading, error } = this.state;
    var divStyle = {
      width: '40px',
      height: '40px'
    }

    // if (error || !data) {}


    return (
      <header className="header">
      <div className="header__content">
        <div className="header__row">
          <div className="header__icon">
          <Link to="/">
            <img src={require('../../img/smiley3.png')} alt="Smileycoin" style={divStyle}/>
          </Link>
            <h1 className="header__title"><Link to="/">SmileyCoin</Link></h1>
          </div>
          <nav className="header__nav">
            <Coins/>
            <ul className="header__list">
              <li className="header__item header__hide"><Link to="/details" className="header__link">Details</Link></li>
              <li className="header__item header__hide"><Link to="/wallets" className="header__link">Wallets</Link></li>
              <li className="header__item header__hide"><Link to="/getstarted" className="header__link">Get Started</Link></li>
              <li className="header__item header__hide"><Link to="/about" className="header__link">Introduction</Link></li>
              <li className="header__item">
                <div className="dropdown">
                  <div className="dropdown__header" onClick={ () => this.toggleList()}>
                    <div className="dropdown__header__title"><p>{String.fromCharCode(9776)}</p></div>
                  </div>
                  {listOpen && (
                    <ul className="dropdown__list" onClick={ () => this.toggleList()}>
                      <Link to="/" className="dropdown__link"><li className="dropdown__list__item">Home</li></Link>
                      <Link to="/getstarted" className="dropdown__link"><li className="dropdown__list__item">Get Started</li></Link>
                      <Link to="/about" className="dropdown__link"><li className="dropdown__list__item">Introduction</li></Link>
                      <Link to="/coininfo" className="dropdown__link"><li className="dropdown__list__item">Coin and mining information</li></Link>
                      <Link to="/details" className="dropdown__link"><li className="dropdown__list__item">Details</li></Link>
                      <Link to="/wallets" className="dropdown__link"><li className="dropdown__list__item">Wallets</li></Link>
                    </ul>
                  )}
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="modal" id="modal__community">
          {/* Modal content*/}
          <div className="CommModal-content">
            <span className="closeComm close" onClick={this.hideModal}>&times;</span>
            <p>Our community!</p>
            <ul>
                <li><a href="https://bitcointalk.org/index.php?topic=845761.msg9431919#msg9431919">SmileyCoin on Bitcointalk</a> - General discussion about the SmileyCoin ecosystem, innovation and announcements </li>
                <li><a href="https://twitter.com/smileycoinnews?lang=en">SmileyCoin twitter page</a> - News and announcements of SmileyCoin </li>
                <li><a href="https://www.reddit.com/r/smileycoin/">Reddit</a> - Join our Reddit Community!</li>
                <li><a href="https://t.me/joinchat/GD3HC0aN2bMysqCivQgmVw">Telegram</a> - SmileyCoin chatroom - Telegram</li>
            </ul>
          </div>
      </div>
      {/* The Game Modal */}
      <div className="modal" id="modal__games">
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
    </header>
    )
  }
}
