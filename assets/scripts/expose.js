// expose.js
window.addEventListener('DOMContentLoaded', init);

function init() {
  var c = document.getElementById('html');
  const jsConfetti = new JSConfetti({ c });
  var confetti = 0;
  var hornimage = document.getElementById('horn-select');
  var soundtrack = document.querySelector('audio');
  var image = Array.from(document.getElementById('expose').querySelectorAll('img'));
  hornimage.addEventListener('change', (e)=>{
    if(e.target.value == 'air-horn'){
      image[0].src='assets/images/air-horn.svg';
      soundtrack.src = 'assets/audio/air-horn.mp3';
    }
    else if(e.target.value == 'car-horn'){
      image[0].src='assets/images/car-horn.svg';
      soundtrack.src = 'assets/audio/car-horn.mp3';
    }
    else if(e.target.value == 'party-horn'){
      confetti = 1;
      image[0].src='assets/images/party-horn.svg';
      soundtrack.src = 'assets/audio/party-horn.mp3';
    }
  })

  var hornsoundImage = document.getElementById('volume');
  var image2 = Array.from(document.getElementById('expose').querySelectorAll('img'));
  hornsoundImage.addEventListener('input',(event)=>{
    
    if(event.target.value == 0){
      image2[1].src = 'assets/icons/volume-level-0.svg';
    }
    else if(event.target.value <33 & event.target.value >1){
      image2[1].src = 'assets/icons/volume-level-1.svg';
    }
    else if(event.target.value <67 & event.target.value >33){
      image2[1].src = 'assets/icons/volume-level-2.svg';
    }
    else if(event.target.value >67){
      image2[1].src = 'assets/icons/volume-level-3.svg';
    }
    if(event.target.value<100){
      soundtrack.volume = event.target.value/100;
    }
    else{
      soundtrack.volume = 1;
    }
  })
  
  
  var sound = document.getElementById('expose').querySelector('button');
  sound.addEventListener('click',(event)=>{
    if(confetti==1){
      jsConfetti.addConfetti();
    }
    soundtrack.play();
  })
}