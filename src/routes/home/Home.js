import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import { Timeline } from 'react-twitter-widgets'

import './Home.css';
import Heading from '../../components/heading';
import IndexAbout from '../../components/index-about';
import IndexTutor from '../../components/index-tutor';
import IndexHowto from '../../components/index-howto';
import IndexWallets from '../../components/index-wallets';
import IndexCoin from '../../components/index-coin';
import IndexInfo from '../../components/index-info';


export default class Home extends Component {
  render() {
    return (
      <section className="smileypage">
        <Helmet title="SmileyCoin"/>
        <Heading />
        <IndexAbout />
        <IndexTutor />
        <IndexHowto />
        <IndexWallets />
        <IndexCoin />
        <IndexInfo />
      </section>
    );
  }
}
