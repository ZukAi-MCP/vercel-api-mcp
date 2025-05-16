import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import { Timeline } from 'react-twitter-widgets'
import { Nav, Card, Button } from 'react-bootstrap'

import './Wallets.css';

export default class Wallets extends Component {
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
      var windows = document.getElementById('windows');
      var mac = document.getElementById('mac');
      var linux = document.getElementById('linux');

      var android = document.getElementById('android');
      var ios = document.getElementById('ios');

      var online = document.getElementById('online');

      windows.classList.remove("slide");
      mac.classList.remove("slide");
      linux.classList.remove("slide");

      android.classList.remove("slide");
      ios.classList.remove("slide");

      online.classList.remove("slide");


      var desktop = document.getElementsByClassName('desktop')[0];
      var mobile = document.getElementsByClassName('mobile')[0];
      var online = document.getElementById('online');
      desktop.classList.remove("active")
      mobile.classList.remove("active")
      online.classList.remove("active")

      for (var i = 0; i < desktop.children.length; i++) {
        desktop.children[i].style.display = "none"
      }
      for (var i = 0; i < mobile.children.length; i++) {
        mobile.children[i].style.display = "none";
      }

      var android = document.getElementById('android');
      var ios = document.getElementById('ios');

    if(e.target.id == 'desktop-button'){
      var desktop = document.getElementsByClassName('desktop')[0];
      console.log('made it!')
      desktop.classList.toggle("active");
      var children = desktop.children;
      for (var i = 0; i < children.length; i++) {
        children[i].style.display = "flex";
      }
    } else if(e.target.id == 'mobile-button'){
      var mobile = document.getElementsByClassName('mobile')[0];
      mobile.classList.toggle("active");
      mobile.style.display = "flex";
      var children = mobile.children;
      var android  = document.getElementById('')
      for (var i = 0; i < children.length; i++) {
        children[i].style.display = "flex";
      }
    } else if(e.target.id == 'online-button'){
      var online = document.getElementById('online');
      online.style.display = 'flex';
      online.classList.toggle("slide");
    }
  }

  displayDownloadLink(e){
    var windows = document.getElementById('windows');
    var mac = document.getElementById('mac');
    var linux = document.getElementById('linux');
    /*
    windows.style.display = 'none';
    mac.style.display = 'none';
    linux.style.display = 'none';
    */
    windows.classList.remove("slide");
    mac.classList.remove("slide");
    linux.classList.remove("slide");

    if (e.target.id == 'windows_button') {
      windows.style.display = 'flex';
      windows.classList.toggle("slide");
    } else if (e.target.id == 'mac_button'){
      mac.style.display = 'flex';
      mac.classList.toggle("slide");
    } else if (e.target.id == 'linux_button'){
      linux.style.display = 'flex';
      linux.classList.toggle("slide");
    }
  }
  displayMobileLinks(e){
    var android = document.getElementById('android');
    var ios = document.getElementById('ios');

    android.classList.remove("slide");
    ios.classList.remove("slide");


    if (e.target.id == 'ios_button') {
      ios.style.display = 'flex';
      ios.classList.toggle("slide");
    } else if (e.target.id == 'android_button'){
      android.style.display = 'flex';
      android.classList.toggle("slide");
    }
  }
  displayOnline(){
    var online = document.getElementById('online');
    online.style.display = 'flex';
    online.classList.toggle("slide");




  }
  render() {
    return (
      <div className = "wallets">
          <div className = "wallets__title">
              <h2 className = "todo__title__text" >Wallets</h2>
          </div>
          <div className = "wallets__content">
              <p className = "wallets__content__text">
              Choose your wallet!
              </p>
              <div className = "buttons">
                <div className = "wallets__buttons">
                  <div id = "desktop-button" className = "button" onClick = {this.displayWallets}><img src = {require('../../img/001-monitor.png')}></img>Desktop Wallet</div>
                  <div id = "mobile-button" className = "button"  onClick = {this.displayWallets}><img src = {require('../../img/002-smartphone.png')}></img>Mobile Wallet</div>
                  <div id = "online-button" className = "button"  onClick = {this.displayWallets}><img src = {require('../../img/003-web.png')}></img>Online Wallet</div>
                </div>
                <div className = "desktop">
                  <div id = "windows_button" className = "desktop__button button" onClick = {this.displayDownloadLink}><img src = {require('../../img/005-windows-logo-silhouette.png')}></img>Microsoft</div>
                  <div id = "mac_button" className = "desktop__button button" onClick = {this.displayDownloadLink}><img src = {require('../../img/004-apple.png')}></img>MacOS</div>
                  <div id = "linux_button"className = "desktop__button button" onClick = {this.displayDownloadLink}><img src = {require('../../img/006-linux.png')}></img>Linux</div>
                </div>
                <div className = "mobile">
                  <div id = "android_button" className = "mobile__button button" onClick = {this.displayMobileLinks}><img src = {require('../../img/007-android-character-symbol.png')}></img>Android</div>
                  <div id = "ios_button" className = "mobile__button button" onClick = {this.displayMobileLinks}><img src = {require('../../img/004-apple.png')}></img>iOS</div>
                </div>
                <div className = "dl-cards">
                    <div className="dwl-card blue-grey darken-1" id = "windows">
                      <div className="dwl-card-content white-text">
                        <span className="dwl-card-title">Windows</span>
                        <p>Download the Windows wallet or compile your own!</p>
                      </div>
                      <div className="dwl-card-action">
                        <a href="https://github.com/tutor-web/smileyCoin/releases/latest/download/smileycoin-qt.exe">Download</a>
                        <a href="https://github.com/tutor-web/smileyCoin/blob/master/doc/build-msw.md">Compilition instructions</a>
                      </div>
                    </div>

                      <div className="dwl-card blue-grey darken-1" id = "mac">
                        <div className="dwl-card-content white-text">
                          <span className="dwl-card-title">MacOS</span>
                          <p>Download the MacOS wallet or compile your own!</p>
                        </div>
                        <div className="dwl-card-action">
                          <a href="https://github.com/tutor-web/smileyCoin/releases/latest/download/Smileycoin-Qt.dmg">Download</a>
                          <a href="https://github.com/tutor-web/smileyCoin/blob/master/doc/build-osx.md">Compilition instructions</a>
                        </div>
                      </div>

                      <div className="dwl-card blue-grey darken-1" id = "linux">
                        <div className="dwl-card-content white-text">
                          <span className="dwl-card-title">Linux</span>
                          <p>Click the link below for instructions on how to compile your own wallet</p>
                        </div>
                        <div className="dwl-card-action">
                          <a href="https://github.com/tutor-web/smileyCoin/blob/master/doc/build-unix.md">Compilition instructions</a>
                      </div>
                      </div>

                      <div className="dwl-card blue-grey darken-1" id = "ios">
                        <div className="dwl-card-content white-text">
                          <span className="dwl-card-title">iOS</span>
                          <p>Download the Coinomi wallet from the App Store!</p>
                        </div>
                        <div className="dwl-card-action">
                          <a href="https://apps.apple.com/us/app/coinomi-wallet/id1333588809">Coinomi</a>
                      </div>
                      </div>

                      <div className="dwl-card blue-grey darken-1" id = "android">
                        <div className="dwl-card-content white-text">
                          <span className="dwl-card-title">Android</span>
                          <p>Download the Coinomi wallet from the Play Store!</p>
                        </div>
                        <div className="dwl-card-action">
                          <a href="https://play.google.com/store/apps/details?id=com.coinomi.wallet&hl=en">Coinomi</a>
                      </div>
                      </div>

                      <div className="dwl-card blue-grey darken-1" id = "online">
                        <div className="dwl-card-content white-text">
                          <span className="dwl-card-title">HTML5 Wallet</span>
                          <p>Use our simple HTML5 Wallet!</p>
                        </div>
                        <div className="dwl-card-action">
                          <a href="https://wallet.smileyco.in/?network=smileycoin">wallet.smileyco.in</a>
                      </div>
                      </div>
                  </div>
              </div>
            </div>
          </div>

  );
  }
}
