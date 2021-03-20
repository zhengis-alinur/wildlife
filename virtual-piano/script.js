const piano = document.querySelector('.piano');
const keys = document.querySelectorAll('.piano-key');
let currentKey = undefined;
let lastEvent = undefined;
let lastKeyEvent = 'keyup';
let pressed = new Set();

document.addEventListener("mouseup", (event) => {
  lastEvent = "mouseup";
  const key = event.target;
  key.classList.remove("piano-key-active");
});

document.addEventListener("mouseout", (event) => {
  const key = event.target;
  key.classList.remove("piano-key-active");
});

piano.addEventListener("mousedown", (event) => {
  if(event.target.classList.contains('piano-key')) {
    const key = event.target;
    const note = key.dataset.note;
    key.classList.add("piano-key-active");
    playAudio(note);
    currentKey = key;
    lastEvent = 'mousedown';
  }
});

piano.addEventListener("mouseover", (event) => {
  if(event.target.classList.contains('piano-key') && lastEvent == 'mousedown') {
    const key = event.target;
    key.classList.add("piano-key-active");
    const note = key.dataset.note;
    playAudio(note);
    currentKey = key;
  }
});


function playAudio(note) {
  const noteSound = new Audio();
  const src = 'assets/audio/' + note + '.mp3';
  noteSound.src = src;
  noteSound.currentTime = 0;
  noteSound.play();
}
const keyUpHandler = function(code) {
  switch(code) {
    case "KeyD": {
      keys[0].classList.remove("piano-key-active");
      break;
    }
    case "KeyF": {
      keys[1].classList.remove("piano-key-active");
      break;
    }
    case "KeyG": {
      keys[2].classList.remove("piano-key-active");
      break;
    }
    case "KeyH": {
      keys[3].classList.remove("piano-key-active");
      break;
    }
    case "KeyJ": {
      keys[4].classList.remove("piano-key-active");
      break;
    }
    case "KeyK": {
      keys[5].classList.remove("piano-key-active");
      break;
    }
    case "KeyL": {
      keys[6].classList.remove("piano-key-active");
      break;
    }
    case "KeyR": {
      keys[7].classList.remove("piano-key-active");
      break;
    }
    case "KeyT": {
      keys[8].classList.remove("piano-key-active");
      break;
    }
    case "KeyU": {
      keys[9].classList.remove("piano-key-active");
      break;
    }
    case "KeyI": {
      keys[10].classList.remove("piano-key-active");
      break;
    }
    case "KeyO": {
      keys[11].classList.remove("piano-key-active");
      break;
    }
  }
};
const keyDownHandler = function(code) {
  switch(code) {
    case "KeyD": {
      keys[0].classList.add("piano-key-active");
      playAudio('c');
      break;
    }
    case "KeyF": {
      keys[1].classList.add("piano-key-active");
      playAudio('d');
      break;
    }
    case "KeyG": {
      keys[2].classList.add("piano-key-active");
      playAudio('e');
      break;
    }
    case "KeyH": {
      keys[3].classList.add("piano-key-active");
      playAudio('f');
      break;
    }
    case "KeyJ": {
      keys[4].classList.add("piano-key-active");
      playAudio('g');
      break;
    }
    case "KeyK": {
      keys[5].classList.add("piano-key-active");
      playAudio('a');
      break;
    }
    case "KeyL": {
      keys[6].classList.add("piano-key-active");
      playAudio(event, 'b');
      break;
    }
    case "KeyR": {
      keys[7].classList.add("piano-key-active");
      playAudio('c♯');
      break;
    }
    case "KeyT": {
      keys[8].classList.add("piano-key-active");
      playAudio('d♯');
      break;
    }
    case "KeyU": {
      keys[9].classList.add("piano-key-active");
      playAudio('f♯');
      break;
    }
    case "KeyI": {
      keys[10].classList.add("piano-key-active");
      playAudio('g♯');
      break;
    }
    case "KeyO": {
      keys[11].classList.add("piano-key-active");
      playAudio('a♯');
      break;
    }
  }
};
document.addEventListener('keydown', (event) => {
  pressed.add(event.code);
  console.log("add" + event.code);
  pressed.forEach(element => {
    keyDownHandler(element);
  });
});
document.addEventListener('keyup', (event) => {
  pressed.delete(event.code);
  console.log("delete" + event.code);
  pressed.forEach(element => {
    keyUpHandler(element);
  });
});



