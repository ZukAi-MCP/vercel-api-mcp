import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import { Timeline } from 'react-twitter-widgets'

import './CoinInfo.css';

export default class CoinInfo extends Component {
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
                    <p className = "title bold">Smiley</p>
                    <p className = "title">Coin</p>
                </div>
            </div>
        </div>
    </div>
  <div className = "smly">
    <div className = "smlyabout">
    <h1 className="smlyabout__title">Coin and Mining Information</h1>
        <p>
        The following information is intended specifically for miners who help run the SMLY cryptocoin network. Attempts are made to keep it up-to-date, but the thread at <a href = "https://bitcointalk.org/index.php?topic=845761">https://bitcointalk.org/index.php?topic=845761</a> keeps a track record of the development.
        <br/><br/>
        The tutor-web project pre-mined just under 50% of all coins. These premined coins were subsequently moved to the SmileyCoin Fund and stored in a single multisig address, 3JT9LAzuMChCifVoQQK18BQV9z4BzpbQVH. Since the initial phase, mining has been open to any miner. The opening date for mining was Nov. 24 2014, as announced on twitter (by @gstefans), on the main talk forum at <a href = "https://bitcointalk.org/index.php?topic=845761.0">https://bitcointalk.org/index.php?topic=845761.0</a>; all and on <a href = "https://www.altcoincalendar.info">https://www.altcoincalendar.info</a>.
        <br/><br/>
        As explained elsewhere on this page, the SmileyCoin Fund has a Board which accepts grant applications for education and educational technology. For example, the tutor-web wallet recieves SmileyCoins which are used to reward students for their performance. In addition, the project will award grants to developers and entrepreneurs, who aim to use the Smileycoin in their systems or otherwise develop environments which lead to increased use of the SMLY. Uses may include but are not limited to gaming projects requiring the use of SMLY as a currency. 
        <br/><br/>
            Initial block reward: 10000 SMLY. Current coinbase 10000 SMLY is split three ways, 1000 as a reward, 4500 for donations and 4500 for dividends.
        <br/><br/>
        The coin was initially based on Litecoin source. The source code is freely available. UPDATE: From 2017 the core wallet is based on Auroracoin code.
        <br/><br/>
        A total of 48*10^9 (48 billion) coins will eventually be generated.
        <br/><br/>
        Difficulty is adjusted so as to obtain a new block every 3 minutes on average. This difficulty schedule aims to reduce the number of mined coins per block by 50% over 7 years. Modification: The actual difficulty computations have been revised a few times to obtain more stability in block times.
        <br/><br/>
        Main technical discussion thread: <a href = "https://bitcointalk.org/index.php?topic=845761">https://bitcointalk.org/index.php?topic=845761</a>
        <br/><br/>
        Coin explorers: <a href = "https://chainz.cryptoid.info/smly/">https://chainz.cryptoid.info/smly/</a> and <a href = "https://blocks.smileyco.in/">https://blocks.smileyco.in/</a>
        <br/><br/>
        The SMLY is registered at cryptocoin exchanges, where it is possible to exchange SMLY for other electronic currencies such as Dogecoin (DOGE) and Litecoin (LTC) as well as Bitcoin (BTC).
        See for example <a href = "https://tradesatoshi.com/">https://tradesatoshi.com/</a> <a href = "https://www.southxchange.com/Market/Book/SMLY/LTC">https://www.southxchange.com/Market/Book/SMLY/LTC</a>, and <a href = "https://p2pb2b.io/">https://p2pb2b.io/</a>
        </p>
      </div>
  </div>
      </section>
    );
  }
}
