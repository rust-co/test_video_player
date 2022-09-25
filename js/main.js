var myPlayer = videojs('my-video');
var audioTracks = myPlayer.audioTracks();


var buttonCheck;
 
const audioLink = 'https://edge1.zebrastudio.live/out/mainz/playlist.m3u8'
const dgsLink = 'https://nimble1.zebrastudio.live/DGS/mainz/playlist.m3u8'





var dgs = document.getElementsByClassName('dgs-link');
var audioChoice = document.getElementsByClassName('audio');

var activeStream = document.getElementsByClassName('activeStream');

var videoHidden = document.getElementById('my-video');

var introVideo = document.getElementById('introVideo');

var agendaElement = document.getElementById('agenda');

var explainerElement = document.getElementById('explainer');



function dgsVideo(event) {
  
    myPlayer.player().src(dgsLink);
    dgs[0].classList.toggle("hidden");
    dgs[1].classList.toggle("hidden");
    audioChoice[0].classList.add("hidden");
    audioChoice[1].classList.add("hidden");
    audioChoice[2].classList.add("hidden");
    audioChoice[3].classList.add("hidden");
    audioChoice[4].classList.add("hidden");
    audioChoice[5].classList.add("hidden");
    audioChoice[6].classList.add("hidden");
    audioChoice[7].classList.add("hidden");
    audioChoice[8].classList.add("hidden");
    audioChoice[9].classList.add("hidden");

    audioAll[0].classList.remove("hidden");
    audioAll[1].classList.remove("hidden");
    videoHidden.classList.remove("hidden");
    introVideo.remove();
    agendaElement.classList.remove("hidden");
    explainerElement.remove();

}

function allAudio(event) {
  
  myPlayer.player().src(audioLink);
  dgs[0].classList.remove("hidden");
  dgs[1].classList.remove("hidden");
  audioChoice[0].classList.remove("hidden");
  audioChoice[1].classList.remove("hidden");
  audioChoice[2].classList.remove("hidden");
  audioChoice[3].classList.remove("hidden");
  audioChoice[4].classList.remove("hidden");
  audioChoice[5].classList.remove("hidden");
  audioChoice[6].classList.remove("hidden");
  audioChoice[7].classList.remove("hidden");
  audioChoice[8].classList.remove("hidden");
  audioChoice[9].classList.remove("hidden");
  audioAll[0].classList.add("hidden");
  audioAll[1].classList.add("hidden");
  videoHidden.classList.remove("hidden");
  introVideo.remove();
  agendaElement.classList.remove("hidden");
  explainerElement.remove();

}




function originalAudio(event) {

  audioTracks[3].enabled = true;
  originalBtn[0].classList.add("cur");
  englishBtn[0].classList.remove("cur");
  deutschBtn[0].classList.remove("cur");
  leichteBtn[0].classList.remove("cur");
  polskiBtn[0].classList.remove("cur");
}

function englishAudio(event) {

  audioTracks[1].enabled = true;
  originalBtn[0].classList.remove("cur");
  englishBtn[0].classList.add("cur");
  deutschBtn[0].classList.remove("cur");
  leichteBtn[0].classList.remove("cur");
  polskiBtn[0].classList.remove("cur");
}

function deutschAudio(event) {

  audioTracks[0].enabled = true;
  originalBtn[0].classList.remove("cur");
  englishBtn[0].classList.remove("cur");
  deutschBtn[0].classList.add("cur");
  leichteBtn[0].classList.remove("cur");
  polskiBtn[0].classList.remove("cur");
}

function leichteAudio(event) {

  audioTracks[2].enabled = true;
  originalBtn[0].classList.remove("cur");
  englishBtn[0].classList.remove("cur");
  deutschBtn[0].classList.remove("cur");
  leichteBtn[0].classList.add("cur");
  polskiBtn[0].classList.remove("cur");
}

function polskiAudio(event) {

  audioTracks[4].enabled = true;
  originalBtn[0].classList.remove("cur");
  englishBtn[0].classList.remove("cur");
  deutschBtn[0].classList.remove("cur");
  leichteBtn[0].classList.remove("cur");
  polskiBtn[0].classList.add("cur");
}

var audioAll = document.getElementsByClassName('audioAll');

var originalBtn = document.getElementsByClassName('original');
var englishBtn = document.getElementsByClassName('english');
var deutschBtn = document.getElementsByClassName('deutsch');
var leichteBtn = document.getElementsByClassName('leicht');
var polskiBtn = document.getElementsByClassName('polski');


const originalAudioBtn = document.querySelector('.original');
const originalAudioBtnBot = document.querySelector('.original-bottom');

const englishAudioBtn = document.querySelector('.english');
const englishAudioBtnBot = document.querySelector('.english-bottom');

const deutschAudioBtn = document.querySelector('.deutsch');
const deutschAudioBtnBot = document.querySelector('.deutsch-bottom');

const leichteAudioBtn = document.querySelector('.leicht');
const leichteAudioBtnBot = document.querySelector('.leicht-bottom');

const polskiAudioBtn = document.querySelector('.polski');
const polskiAudioBtnBot = document.querySelector('.polski-bottom');


const allAudioBtn = document.querySelector('.audioAll');
const allAudioBtnBot = document.querySelector('.audioAll-bottom');


const dgsVideoBtn = document.querySelector('.dgs-link');
const dgsVideoBtnBot = document.querySelector('.dgs-bottom');



originalAudioBtn.addEventListener('click', originalAudio);
originalAudioBtnBot.addEventListener('click', originalAudio);

englishAudioBtn.addEventListener('click', englishAudio);
englishAudioBtnBot.addEventListener('click', englishAudio);

deutschAudioBtn.addEventListener('click', deutschAudio);
deutschAudioBtnBot.addEventListener('click', deutschAudio);

leichteAudioBtn.addEventListener('click', leichteAudio);
leichteAudioBtnBot.addEventListener('click', leichteAudio);

polskiAudioBtn.addEventListener('click', polskiAudio);
polskiAudioBtnBot.addEventListener('click', polskiAudio);

allAudioBtn.addEventListener('click', allAudio);
allAudioBtnBot.addEventListener('click', allAudio);

dgsVideoBtn.addEventListener('click', dgsVideo);
dgsVideoBtnBot.addEventListener('click', dgsVideo);

