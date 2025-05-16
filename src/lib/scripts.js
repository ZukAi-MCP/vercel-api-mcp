/*

document.addEventListener('DOMContentLoaded', () => {

}
*/
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
// Get the modal


// Get the button that opens the modal

// Get the <span> element that closes the modal


// When the user clicks on the button, open the modal

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

// Wallets

const desktop_but = document.getElementsByClassName('desktop-button');
const mobile_but = document.getElementsByClassName('mobile-button');
const online_but = document.getElementsByClassName('online-button');

//desktop_but.addEventListener()

const desktop = document.getElementsByClassName('desktop');
const mobile = document.getElementsByClassName('mobile');
const online = document.getElementsByClassName('online');

desktop.onclick = function(){
  desktop.style.display = "flex";
}
