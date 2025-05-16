import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Coins.css';

export default class Coins extends Component {
  state = { loading: true }

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    const baseurl = 'https://min-api.cryptocompare.com/data/price?fsym=SMLY&tsyms=BTC,DOGE,USD'
    const api_key = process.env.REACT_APP_SERVICE_URL;
    const url = baseurl + '&api_key=' + api_key;

    let response;
    try {
      response = await fetch(url);
      const result = await response.json();
      this.setState({ loading: false, data: result})
    } catch (error) {
      console.log('Error fetching', error)
      this.setState({ error: true, loading: false })
    }
  }

  render() {
    const { listOpen } = this.state;
    const { data, loading, error } = this.state;

    if (loading) {
      return (<div>Loading</div>);
    }

    // if (error || !data) {}


    return (
      <div className="header__coins">
          {data && (
            <ul className="header__coins">
              <li className="header__coin">
                <p className="header__coin__title">SMLY/USD</p>
                <p>{data.USD} USD</p>
              </li>
              <li className="header__coin">
                <p className="header__coin__title">SMLY/BTC</p>
                <p>{data.BTC} BTC</p>
              </li>
              <li className="header__coin">
                <p className="header__coin__title">SMLY/DOGE</p>
                <p>{data.DOGE} DOGE</p>
              </li>
            </ul>
          )}
          </div>
    )
  }
}
