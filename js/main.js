var myPlayer = videojs('my-video');
var audioTracks = myPlayer.audioTracks();


var buttonCheck;
 


console.log('audioTracks', audioTracks);

function dgsVideo(event) {
  var dgs = document.getElementsByClassName('dgs-link');
  var activeStream = document.getElementsByClassName('activeStream');
  if (dgs == activeStream) {
    
  } else {
    myPlayer.player().src('https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8');
    dgs[0].classList.toggle("activeStream");
    activeStream = dgs;
  }

 



}

function originalAudio(event) {
  // myPlayer.player().src('https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8');
  audioTracks[0].enabled = true;
}
function englishAudio(event) {
  // myPlayer.player().src('https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8');
  audioTracks[1].enabled = true;
}
// function originalAudio(event) {
//   audioTracks[2].enabled = true;
// }
// function originalAudio(event) {
//   audioTracks[3].enabled = true;
// }
// function originalAudio(event) {
//   audioTracks[4].enabled = true;
// }
// function clickHandler(event) {
//   // myPlayer.player().src('https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8');
//     myPlayer.player().audioTracks[1].enabled = true;
// }



const originalAudioBtn = document.querySelector('.original');
const englishAudioBtn = document.querySelector('.english');
const dgsVideoBtn = document.querySelector('.dgs-link');



originalAudioBtn.addEventListener('click', originalAudio);
englishAudioBtn.addEventListener('click', englishAudio);
dgsVideoBtn.addEventListener('click', dgsVideo);

