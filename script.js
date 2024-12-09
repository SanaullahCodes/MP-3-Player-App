// const progress = document.getElementById("progress");
// const song = document.getElementById("song");
// const controlIcon = document.getElementById("control-icon");

// song.onloadedmetadata = function () {
//   progress.max = song.ondurationchange;
//   progress.value = song.currentTime;
// };

// function playPause() {
//   if (controlIcon.classList.contains("fa-pause")) {
//     song.pause();
//     controlIcon.classList.remove("fa-pause");
//     controlIcon.classList.add("fa-play");
//   } else {
//     song.play();
//     controlIcon.classList.add("fa-pause");
//     controlIcon.classList.remove("fa-play");
//   }
// }

// if (song.play()) {
//   setInterval(() => {
//     progress.value = song.currentTime;
//   }, 500);
// }

// progress.onchange = function () {
//   song.play();
//   song.currentTime = progress.value;
//   controlIcon.classList.add("fa-pause");
//   controlIcon.classList.remove("fa-play");
// };

// Song playlist
const songs = [
  {
    title: "Despacito",
    artist: "Luis Fonsi Ft. Puerto Rican",
    img: "./images/music-img1.jpg",
    src: "./music/song1.mp3",
  },
  {
    title: "Song 2",
    artist: "Artist 2",
    img: "https://images.pexels.com/photos/7521233/pexels-photo-7521233.jpeg?auto=compress&cs=tinysrgb&w=400",
    src: "./music/WhatsApp Audio 2024-10-01 at 11.18.41_8aa1f660.mp3",
  },
  {
    title: "Song 3",
    artist: "Artist 3",
    img: "https://images.pexels.com/photos/6953870/pexels-photo-6953870.jpeg?auto=compress&cs=tinysrgb&w=400",
    src: "./music/WhatsApp Audio 2024-10-01 at 11.19.14_43c9ebde.mp3",
  },
];

let currentSongIndex = 0;

const song = document.getElementById("song");
const songImg = document.querySelector(".song-img");
const songTitle = document.querySelector("h1");
const songArtist = document.querySelector("p");
const controlIcon = document.getElementById("control-icon");
const progress = document.getElementById("progress");

function loadSong(index) {
  const currentSong = songs[index];
  song.src = currentSong.src;
  songImg.src = currentSong.img;
  songTitle.textContent = currentSong.title;
  songArtist.textContent = currentSong.artist;
  song.load(); // Load the new song
  playPause(); // Auto play the new song
}

function playPause() {
  if (controlIcon.classList.contains("fa-pause")) {
    song.pause();
    controlIcon.classList.remove("fa-pause");
    controlIcon.classList.add("fa-play");
  } else {
    song.play();
    controlIcon.classList.add("fa-pause");
    controlIcon.classList.remove("fa-play");
  }
}

// Play next song
function nextSong() {
  currentSongIndex++;
  if (currentSongIndex >= songs.length) {
    currentSongIndex = 0; // Loop back to the first song
  }
  loadSong(currentSongIndex);
}

// Play previous song
function prevSong() {
  currentSongIndex--;
  if (currentSongIndex < 0) {
    currentSongIndex = songs.length - 1; // Loop back to the last song
  }
  loadSong(currentSongIndex);
}

// Progress bar functionality
song.onloadedmetadata = function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
};

if (song.play()) {
  setInterval(() => {
    progress.value = song.currentTime;
  }, 500);
}

progress.onchange = function () {
  song.currentTime = progress.value;
  playPause();
};
