let currentTrack = 0;
const playlist = ["song1.mp3", "song2.mp3", "song3.mp3"];
let isPlaying = false;
const audio = new Audio(playlist[currentTrack]);

// Play/Pause
document.getElementById("play").addEventListener("click", () => {
    if (isPlaying) {
        audio.pause();
        isPlaying = false;
    } else {
        audio.play();
        isPlaying = true;
    }
});

// Next Track
document.getElementById("next").addEventListener("click", () => {
    currentTrack = (currentTrack + 1) % playlist.length;
    audio.src = playlist[currentTrack];
    audio.play();
    isPlaying = true;
});

// Previous Track
document.getElementById("prev").addEventListener("click", () => {
    currentTrack = (currentTrack - 1 + playlist.length) % playlist.length;
    audio.src = playlist[currentTrack];
    audio.play();
    isPlaying = true;
});

// Volume Control
document.getElementById("volume").addEventListener("input", (e) => {
    audio.volume = e.target.value;
});

// Progress Bar
audio.addEventListener("timeupdate", () => {
    document.getElementById("progress").value = (audio.currentTime / audio.duration) * 100;
});

document.getElementById("progress").addEventListener("input", (e) => {
    audio.currentTime = (e.target.value / 100) * audio.duration;
});

// Shuffle
document.getElementById("shuffle").addEventListener("click", () => {
    currentTrack = Math.floor(Math.random() * playlist.length);
    audio.src = playlist[currentTrack];
    audio.play();
    isPlaying = true;
});

// Repeat
document.getElementById("repeat").addEventListener("click", () => {
    audio.loop = !audio.loop;
});
