const piano = document.querySelector(".piano");

let currentKey = undefined;
let lastEvent = undefined;

document.addEventListener("mouseup", (event) => {
  lastEvent = "mouseup";
});

piano.addEventListener("mousedown", (event) => {
  if(event.target.classList.contains('piano-key')) {
    const key = event.target;
    const note = key.dataset.note;
    key.classList.toggle(":active");
    playAudio(event, note);
    currentKey = key;
    lastEvent = 'mousedown';
  }
});

piano.addEventListener("mouseover", (event) => {
  if(event.target.classList.contains('piano-key') && lastEvent == 'mousedown') {
    const key = event.target;
    key.classList.toggle("piano-key:active");
    const note = key.dataset.note;
    playAudio(event, note);
    currentKey = key;
  }
});

function playAudio(event, note) {
  const noteSound = new Audio();
  const src = 'assets/audio/' + note + '.mp3';
  noteSound.src = src;
  noteSound.currentTime = 0;
  noteSound.play();
}