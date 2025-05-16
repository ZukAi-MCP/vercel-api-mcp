import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';

// import './Modals.css';

export default class Modals extends Component {
  render() {
    const comm = document.querySelector('.community');
    const games = document.querySelector('.games');
    const modal = document.querySelector('.modal');
    const gameIcon = document.getElementById('gameIcon');
    const CommModal = document.getElementById('myCommunityModal');
    const GameModal = document.getElementById('myGameModal');
    const GameSpan = document.getElementsByClassName("closeGame")[0];
    const CommSpan = document.getElementsByClassName("closeComm")[0];
    comm.addEventListener('click', openComm);
    games.addEventListener('click', openGame);
    gameIcon.addEventListener('click', openGame);

    // When the user clicks on <span> (x), close the modal
    CommSpan.onclick = function() {
      CommModal.style.display = "none";
    }
    GameSpan.onclick = function() {
      GameModal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == GameModal || event.target == CommModal) {
        GameModal.style.display = "none";
        CommModal.style.display = "none";
      }
    }


    function openComm(){
      CommModal.style.display = "block";
    }

    function openGame(){
      GameModal.style.display = "block";
    }
    return (
      <div class="modals">
        {/* The Community Modal */}
        <div id="myCommunityModal" class="modal">
                {/* Modal content */}
            <div class="CommModal-content">
              <span class="closeComm close">&times;</span>
              <p>Our community!</p>
              <ul>
                  <li><a href="https://bitcointalk.org/index.php?topic=845761.msg9431919#msg9431919">SmileyCoin on Bitcointalk</a> - General discussion about the SmileyCoin ecosystem, innovation and announcements </li>
                  <li><a href="https://twitter.com/smileycoinnews?lang=en">SmileyCoin twitter page</a> - News and announcements of SmileyCoin </li>
                  <li><a href="https://www.reddit.com/r/smileycoin/">Reddit</a> - Join our Reddit Community!</li>
            <li><a href="https://t.me/joinchat/GD3HC0aN2bMysqCivQgmVw">Telegram</a> - SmileyCoin chatroom, Telegram</li>
              </ul>
            </div>
          </div>

        {/* The Game Modal */}
        <div id="myGameModal" class="modal">
                {/* Modal content */}
                <div class="GameModal-content">
                  <span class="closeGame close">&times;</span>
                    <p class = "GameModal-content__title">
                       The simplest game of all is the SMLY double-or-nothing game:
                    </p>
                    <p class = "mamma">
                    <br/>
                    Deposit any (small) amount of SMLY to the BEtZyyY address <code class = "address">BEtZyyYqDXqmRJJ45nnL15cuASfiXg9Yik</code> and you will automatically participate in a double-or-nothing game.
                    <br/><br/>
                    If you are on a Windows, Linux or Mac computer then the easiest way to do this is in the Console window, where you can give commands of the form:
                    <br/><br/>
                    <code class = "address">
                        sendtoaddress BEtZyyYqDXqmRJJ45nnL15cuASfiXg9Yik 20
                    </code>
                    <br/><br/>
                    repeatedly and see how you sometimes get the double back and sometimes nothing.
                  </p>
              </div>
          </div>
      </div>
    )
  }
}
