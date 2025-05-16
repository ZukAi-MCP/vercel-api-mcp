import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';

import './GetStarted.css';

export default class GetStarted extends Component {
  render() {

    var imgStyle
    return (
      <section className="getstarted">
        <Helmet title="Get Started" />
        <div className = "heading info">
          <div className ="heading__content">
              <div className = "heading__img">
                  <img src="smiley3.png" alt="Smileycoin"/>
              </div>
              <div className="heading__content__title getstarted-title">
                  <div className="heading__content__title__title">
                      <p className = "title">How to earn <b>Smiley</b>Coin </p>
                  </div>
              </div>
          </div>
      </div>
          <div className="how-to__row">
          <div className = "how-to__col">
            <div className = "how-to__title" name = "easy">Easiest: Donate to Education in a Suitcase</div>
            <div className = "how-to__content">
                <div>
                    The project Education in a Suitcase will happily accept your donations. In return for a donation, they will give you some Smileycoins.
                    <br/>
                    Remember to use only small amounts while you are finding your way through this!
                    <br/>
                    You will not make money from this transaction, but you will painlessly get some Smileycoins which you can then use to test the waters of electronic currencies.
                    <br/><br/>
                    Make sure you first have a SMLY wallet! Go to the <Link to= "/wallets">download page</Link> to find the right wallet for you!
                    <br/>
                    <br/>
                    It is easy to test this: Just go to their <a href="http://educationinasuitcase.com/donation/en/index.html">Donation page</a> and send them five dollars. If you follow the instructions, then you will quickly see some Smileycoins in your wallet.
	    <br/>
	    Warning: The service provider ran into problems at one stage. You can in any case support the Smiley Charity through their <a href="https://www.patreon.com/eias">Patreon page</a>.
            </div>
            </div>
          </div>
    </div>
    <div className="how-to__row">
        <div className = "how-to__col">
            <div className = "how-to__title" name = "work">With work: Get SMLY by studying in the tutor-web system</div>
            <div className = "how-to__content">
                <p>
                    The <a href = "https://tutor-web.net/"> tutor-web system </a> is a completely free and open system of study.
                    You can pick any course or study-unit (tutorial) and study this to your hearts content by reading the available material and (most importantly) answering drill questions.
                    As you increase your grade in those drills, you will get SMLY. Once you have SMLY you can download them into a Smileycoin wallet.
                </p>
            </div>
        </div>
    </div>
    <div className="how-to__row">
        <div className = "how-to__col">
            <div className = "how-to__title" name = "long">The long way: Buy SMLY at a cryptocurrency exchange</div>
            <div className = "how-to__content">
                    <p>
                    Getting into the world of cryptocurrencies is a bit tricky. There are several hurdles to get started using cryptocoins and buying your first SMLY is not quite trivial.
                    <br/><br/>
                    You will always need to have an account at a cryptocurrency exchange.
                    <br/><br/>
            The exchanges at <a href="https://tradesatoshi.com/">Tradesatoshi</a>, <a href="https://www.southxchange.com/Market/Book/SMLY/DOGE">SouthXchange</a> and
	    <a href="https://p2pb2b.io">p2pb2b</a>  have several "markets", i.e. places which look like a stock market and you can sell one cryptocurrency for another.
	    These exchanges have several SMLY markets.
            <br/><br/>
	    Before entering any of these exchanges to buy SMLY, however, you need to convert fiat money (USD, ISK, EUR) to Bitcoin or another cryptocurrency first.
	    This is most commonly done on a national exchange such as <a href="https://isx.is/">isx.is</a>
	    <br/><br/>
	    Alternatively you can use a broker who handles the entire process, such as <a href="http://balkar.is">Bálkar Miðlun</a>.
            </p>
            </div>
        </div>
    </div>
    <div className="how-to__row how-to__row--last">
        <div className = "how-to__col">
            <div className = "how-to__title" name = "wind">The winding way: Use the SMLY ATM</div>
            <div className = "how-to__content">
            Recently, experiments have been made with a SMLY ATM. This is a black-box into which one deposits Litecoin and gets back Smileycoin. <a href="https://steemit.com/blockchain/@gstefans/more-messing-around-with-the-blockchain-an-atm-for-smly"> A document is available </a> describing the non-trivial process. WARNING: These are (were) just experiments. Not for general use.
            </div>
            <div className = "smlyabout__back">
                <Link to="/" className = "backLink">Go back</Link>
            </div>
        </div>
    </div>
    </section>
    );
  }
}
