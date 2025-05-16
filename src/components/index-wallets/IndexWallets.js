import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';

import './IndexWallets.css';

export default class IndexWallets extends Component {

  hideWallets(){
    var desktop = document.getElementsByClassName('desktop')[0];
    var mobile = document.getElementsByClassName('mobile')[0];
    var online = document.getElementById('online');
    online.style.display = "none";
    for (var i = 0; i < desktop.children.length; i++) {
      desktop.children[i].style.display = "none"
    }
    for (var i = 0; i < mobile.children.length; i++) {
      mobile.children[i].style.display = "none";
    }
  }

  displayWallets(e){
      var desktop = document.getElementsByClassName('desktop')[0];
      var mobile = document.getElementsByClassName('mobile')[0];
      var online = document.getElementById('online');
      online.style.display = "none";
      for (var i = 0; i < desktop.children.length; i++) {
        desktop.children[i].style.display = "none"
      }
      for (var i = 0; i < mobile.children.length; i++) {
        mobile.children[i].style.display = "none";
      }
      var windows = document.getElementById('windows');
      var mac = document.getElementById('mac');
      var linux = document.getElementById('linux');
      windows.style.display = 'none';
      mac.style.display = 'none';
      linux.style.display = 'none';
      var android = document.getElementById('android');
      var ios = document.getElementById('ios');
      android.style.display = 'none';
      ios.style.display = 'none';
    if(e.target.id == 'desktop-button'){
      var desktop = document.getElementsByClassName('desktop')[0];
      console.log('made it!')
      desktop.className += " active";
      var children = desktop.children;
      for (var i = 0; i < children.length; i++) {
        children[i].style.display = "flex";
      }
    } else if(e.target.id == 'mobile-button'){
      var mobile = document.getElementsByClassName('mobile')[0];
      mobile.className += " active";
      mobile.style.display = "flex";
      var children = mobile.children;
      var android  = document.getElementById('')
      for (var i = 0; i < children.length; i++) {
        children[i].style.display = "flex";
      }
    } else if(e.target.id == 'online-button'){
      var online = document.getElementById('online');
      online.style.display = "flex";
    }
  }

  displayDownloadLink(e){
    var windows = document.getElementById('windows');
    var mac = document.getElementById('mac');
    var linux = document.getElementById('linux');
    windows.style.display = 'none';
    mac.style.display = 'none';
    linux.style.display = 'none';

    if (e.target.id == 'windows_button') {
      windows.style.display = 'flex';
    } else if (e.target.id == 'mac_button'){
      mac.style.display = 'flex';
    } else if (e.target.id == 'linux_button'){
      linux.style.display = 'flex';
    }
  }
  displayMobileLinks(e){
    var android = document.getElementById('android');
    var ios = document.getElementById('ios');
    android.style.display = 'none';
    ios.style.display = 'none';
    if(e.target.id == 'android_button'){
      android.style.display = 'flex';
    } else if (e.target.id == 'ios_button'){
      ios.style.display = 'flex';
    }
  }


  render() {
    return (
      <div className = "wallet">
        <div className = "wallet__content">
            <div className = "wallet__content__title">
                <h2>Wallets</h2>
            </div>
            <div className = "wallet__content__info">
              <div className = "wallet__content__text">
                  <p>
                  Smileycoins are stored in <b>wallets.</b> SMLY wallets for Android, iOS, Windows, Linux and MacOS are available for download.
                  See the <Link to = "/wallets">download page</Link> for more information on downloads. In addition to traditional wallets, a HTML5 wallet is available at <a href = "https://wallet.smileyco.in">https://wallet.smileyco.in</a>
                  </p>
              </div>
              <div className = "wallet__content__img">
              <img src={require('../../img/digital-wallet.png')}></img>
              </div>
            </div>
        </div>
      </div>

    );
  }
}
