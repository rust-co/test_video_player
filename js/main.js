var myPlayer = videojs('my-video');
var audioTracks = myPlayer.audioTracks();


var buttonCheck;
 
const audioLink = 'https://nimble1.zebrastudio.live/out/mainz/playlist.m3u8'
const dgsLink = 'https://nimble1.zebrastudio.live/DGS/mainz/playlist.m3u8'


console.log('audioTracks', audioTracks);


var dgs = document.getElementsByClassName('dgs-link');
var audioChoice = document.getElementsByClassName('audio');
var audioAll = document.getElementsByClassName('audioAll');
var activeStream = document.getElementsByClassName('activeStream');

function dgsVideo(event) {
  
    myPlayer.player().src(dgsLink);
    dgs[0].classList.toggle("hidden");
    audioChoice[0].classList.toggle("hidden");
    audioChoice[1].classList.toggle("hidden");
    audioChoice[2].classList.toggle("hidden");
    audioChoice[3].classList.toggle("hidden");
    audioChoice[4].classList.toggle("hidden");
    audioChoice[5].classList.toggle("hidden");
    audioAll[0].classList.toggle("hidden");
    // activeStream = dgs;

}

function allAudio(event) {
  
  myPlayer.player().src(audioLink);
  dgs[0].classList.toggle("hidden");
  audioChoice[0].classList.toggle("hidden");
  audioChoice[1].classList.toggle("hidden");
  audioChoice[2].classList.toggle("hidden");
  audioChoice[3].classList.toggle("hidden");
  audioChoice[4].classList.toggle("hidden");
  audioChoice[5].classList.toggle("hidden");
  audioAll[0].classList.toggle("hidden");
  // activeStream = dgs;

}

function originalAudio(event) {
  // myPlayer.player().src('https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8');
  audioTracks[3].enabled = true;
}
function englishAudio(event) {
  // myPlayer.player().src('https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8');
  audioTracks[1].enabled = true;
}
function deutschAudio(event) {
  audioTracks[0].enabled = true;
}
function leichteAudio(event) {
  audioTracks[2].enabled = true;
}
function polskiAudio(event) {
  audioTracks[4].enabled = true;
}





const originalAudioBtn = document.querySelector('.original');
const englishAudioBtn = document.querySelector('.english');
const deutschAudioBtn = document.querySelector('.deutsch');
const leichteAudioBtn = document.querySelector('.leicht');
const polskiAudioBtn = document.querySelector('.polski');
const allAudioBtn = document.querySelector('.audioAll');


const dgsVideoBtn = document.querySelector('.dgs-link');


originalAudioBtn.addEventListener('click', originalAudio);
englishAudioBtn.addEventListener('click', englishAudio);
deutschAudioBtn.addEventListener('click', deutschAudio);
leichteAudioBtn.addEventListener('click', leichteAudio);
polskiAudioBtn.addEventListener('click', polskiAudio);
allAudioBtn.addEventListener('click', allAudio);
dgsVideoBtn.addEventListener('click', dgsVideo);

