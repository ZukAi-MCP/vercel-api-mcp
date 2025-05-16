import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import { Timeline } from 'react-twitter-widgets'

import './Details.css';

export default class Details extends Component {
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
    <h1 className="smlyabout__title">Details</h1>
        <p>
	The SmileyCoin Fund is the largest holder of coins. All coins belonging to the Fund are stored in a single multisig address, 3JT9LAzuMChCifVoQQK18BQV9z4BzpbQVH. The Fund accepts grants applications for SMLY-related projects in education and educational technologies.
        <br/><br/>
        The SmileyCoin Fund thus contains coins used to fund projects such as the tutor-web which rewards students for their performance. Typically a student may receive one (or 10) SMLY for a minimal grade but much more, e.g. 100 SMLY (or even 10000) for a top grade (97.5%) in a study unit (lecture/section) and much more again, e.g. 1000 SMLY (or even 1 million SMLY) for acing an entire on-line tutorial. The actual numbers will be a part of the ongoing educational research project, where the most interesting educational research question is what kind of reward system enhances learning the most. From a social science perspective, the most interesting question is probably what effects payments for study have on students in low-income regions of the world. Initially the total number of coins available to the project is about 25 billion and the magnitude of rewards will take into account the number of students, their expected performance and the number of coins remaining, with an aim of not reducing the available number by more than 50% over 7 years
        <br/><br/>
        It is known that it is important for students to completely master the on-line drills, not just marginally pass them. The difference between a marginal pass and excellence is directly reflected in the probability of passing the corresponding real-world course. Thus there is a lot to be said for lavish rewards for a perfect grade in a tutorial. The meaning of "lavish" will be defined through experiments, but for a difficult tutorial this may potentially be set to a high number (even 100 thousand or 1 million SMLY).
        <br/><br/>
        In addition to the automatic on-line rewards, the project will award grants to developers and entrepreneurs, who aim to use the Smileycoin in their systems or otherwise develop environments which lead to increased use of the SMLY. Uses may include but are not limited to gaming projects requiring the use of SMLY as a currency. Of particular interest would be gaming projects where gamers can use the SMLY to buy equipment or access to levels. As a part of this project, an open source game was modified to accept SMLY and is now available in the Google Playstore (for Android)
        <br/><br/>
        As with many other cryptocurrencies, philanthropists are able to buy SMLY in small or large quantities to support the tutor-web project.
        <br/><br/>
        Educational research using the tutor-web has been funded by several grant agencies and this will continue into the future since it is an area of active research. A list of publications by some of these researchers is available. Research projects which have their own funding and aim to use SMLY, will simply purchase SMLY on an exchange.
        <br/><br/>
        In addition to simple payments for doing well on drills, students will also get rewards for other activities currently in the system, as well as some which are only on the drawing board. Since the tutor-web is a research project, several new features get added every year. Recently (2014) a crowd-sourcing feature for drill questions was added. Thus, students now occasionally get asked to write their own question, rather than just answering an existing one, and other students then get an assignment to peer-review the question. There are multiple goals with this type of self-assessment: The students need to think about their studies from a new angle, they get assessed by their peers and will get a chance to revise their earlier work. This is a very different approach from the most common multiple-choice questions. In this approach, the students may get rewarded for submitting a question, for reviewing it, for getting a good review and for writing a good review. This crowd-sourcing of questions has been implemented (but not the payments). Extensions include crowd-sourcing links to useful educational material and even having students submit their own material, such as worked examples, all subject to peer-review. The hope is that this will make the entire educational system more sustainable while also improving education. Initial tests with such a system indicated a tendency to fairly sloppy results from crowd-sourcing, which implies that the exact design of the the peer-review and reward schemes may play an important role.
        <br/><br/>
        The tutor-web payment schedule will be adjusted so that the coins in the wallet do not get spent too quickly as the payments need to match the grants from the SmileyCoin Fund. Uncertainty in the number of students in the system makes it difficult to predict the individual awards.
        <br/><br/>
        The tutor-web wallets were the only ones receiving the pre-mined coins. Since the addresses of the tutor-web wallets are known, this is verifiable. Any subsequent transactions out of these wallets (after the pre-mine) will similarly be a matter of public record, although student rewards will be to anonymous wallets. An amount greater than routine student rewards, such as a possible grant to a developer, will NOT be anonymous, but will be either publicly declared before a transfer is made or at least recorded as a comment in the wallet.
        <br/><br/>
        Like anyone else, students can set up their own wallets, register the wallet address in the tutor-web and transfer their earned SMLY to that wallet. This is only needed when the student intends to use the SMLY as a payment outside the tutor-web.
        <br/><br/>
        The tutor-web will be enhanced to include a simple platform for matching tutors to students. Usually the tutors will be peers. The tutor-student relations will normally be anonymous. The tutors will be graded by the students and will be able to set up their own rate, in terms of SMLY per hour or 15-minute session. In order to use the SMLY in this manner students and tutors may set up their SMLY wallets prior to registration as a provider or requester.
        <br/><br/>
        </p>
        <h2 className="smlyabout__subtitle">The information above gets updated. Updates related to the SMLY reward principles are specified below.</h2>
        <p>
        <b>2015 update:</b> The entire educational reward system will be structured in a way similar to the block rewards for mining. The total number of coins will be 50 billion, 50% for each type of rewards. The block rewards are set to be 12.5 billion over the first 7 years and then go down by 50% every 7-year period. Doing the same for the educational rewards will result in the same annual totals or approximately 12.5 billion over the first 7 years, i.e. by Nov. 2021. Since in the first year or two, there are relatively few (1000) students, the rewards for acing an entire tutorial have been set high, or up to 1 million SMLY for a difficult tutorial.
        <br/><br/>
        <b>2016 update:</b> The total rewards from Nov. 2014-April 2016 are below 130 million SMLY but should have been ten times that number. The tutor-web rewards were increased accordingly from fall 2016, so total rewards through Nov. 2016 are about 2.5 bn. Prices for coffee and the like have been promotional but will be set to match more closely the market value of SMLY (1-2 Satoshi per SMLY in 2014-2016). This is still well below the cumulative target of about 2*(12/7)=3.4 bn for 2 years, but the same settings should come close to the cumulative target of 5.1 bn by Nov. 2017.
        <br/><br/>
        Most students do not redeem their SMLY. Following a Nov. 15 discussion on bitcointalk, two tutor-web changes were implemented: Students have a one-click option to donate their earned SMLY to Education An A Suitcase (EIAS). Further, if SMLY are not redeemed from the tutor-web but lie dormant for 2 years, they will be donated automatically to EIAS.
        <br/><br/>
        As indicated above, liquidity providers have been automated in the form of bots, for SMLY-DOGE and SMLY-LTC markets on tradesatoshi, c-cex and novaexchange. These receive coins from mining activity but were given starting amounts in SMLY from the tutor-web wallets.
        <br/><br/>
        <b>2016 update; information on spending:</b>
        </p>
        <ul class = "about__list">
          <li class = "about__list__item">By year-end 2016, 2.7 billion SMLY have been allocated to students</li>
          <li class = "about__list__item">Most development is undertaken as small research projects, funded by grants.</li>
          <li class = "about__list__item">SMLY have been awarded to certain tasks related to SMLY development: coin explorers, wallets, liquidity provision and mining.</li>
          <li class = "about__list__item">A clause in the tutor-web reward system states: SMLY not redeemed by students will be automatically donated to Education in a Suitcase.</li>
          <li class = "about__list__item">Once the donation clause kicks in (late 2018), EIAS will be able to assist more with SMLY development.</li>
        </ul>
        <p>
        <br/><br/>
        <b>2017 update A:</b>
        t is proposed that the mining fee be modified so that miners no longer receive the entire coinbase of 10 thousand SMLY. Instead, miners receive a much lower amount, most likely 1000 SMLY, 4500 are donated to an address maintained by Education in a Suitcase and 4500 are sent to the oldest address on the rich list. "Oldest" means the one which has remained unchanged for the longest. "Rich list" likely means addresses which contain at least 25 million SMLY. The full details will be worked out in summer, 2017. Combined with the proof-of-work algorithm (scrypt POW), this implements a supplementary proof-of-stake-style approach which pays dividends to wallets on the rich list..
        <br/><br/>
        <b>2017 update B:</b>
        It is proposed that the scrypt algorithm be replaced with a multi-algo setup, most likely by adding X11 (or more) to the existing scrypt setup. A high difficulty in scrypt will allow continued mining with X11.
        <br/><br/>
        <b>2017 update C:</b>
        The changes proposed in <b>A</b> and <b>B</b> were subsequently implemented in summer 2017, though instead of X11, several other mining algorithms were implemented. Specifically, the Auroracoin wallet was used as the basis for a completely new code base. Mining algorithms now include sha256, scrypt, skein, qubit, groestl.
        <br/><br/>
        <b>2018 Feb update on premine spending:</b>
        The initial premine was 24.1 bn SMLY. The total allocated to (earned by) students Nov 2014-Feb 2018 is 5.7 bn SMLY (of which 2.4 have been redeemed. In addition, 0.2 bn have been allocated as grants from the tutor-web wallet, so a total of 5.9 bn have been sent from the premine to the tutor-web system. Other grants and projects have received 2.3 bn SMLY, of which 0.5 bn were put on local tutor-web servers in Kenya, 1.5 bn were used to register on exchanges; for maintain liquidity on exchanges, payment for wallet ports and mining rig rentals to maintain the blockchain. As of Feb 2018, this leaves 15.9 bn SMLY from the premine, kept in cold storage. The premine spending goal is to reduce the premine to (approximately) 12 bn by year-end 2021.
        <br/><br/>
        <b>2019 jan update on premine:</b>
        The remaining premine has been moved entirely into a SmileyCoin Fund governed by a Board which accepts applications from developers and organisers of educational or other technologies which can use or promote the use of SMLY. All premine addresses and change from earlier transfers have been transferred to the multisig address 3JT9LAzuMChCifVoQQK18BQV9z4BzpbQVH. There is no longer a premine and any earlier rules concerning the premine have been superseded by the Mandate of the Board of the Smileycoin Fund.
        </p>
      </div>
  </div>
      </section>
    );
  }
}
