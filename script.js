const video = document.getElementById('video');
const playPauseButton = document.getElementById('play-pause');
const progressBar = document.getElementById('progress-bar');
const progress = document.getElementById('progress__filled');
const volumeControl = document.getElementById('volume');
const playbackSpeed = document.getElementById('playback-speed');
const skipBack = document.getElementById('skip-back');
const skipForward = document.getElementById('skip-forward');

// Play/Pause functionality
playPauseButton.addEventListener('click', () => {
  if (video.paused) {
    video.play();
    playPauseButton.textContent = '❚ ❚';
  } else {
    video.pause();
    playPauseButton.textContent = '►';
  }
});

// Update progress bar
video.addEventListener('timeupdate', () => {
  const percentage = (video.currentTime / video.duration) * 100;
  progress.style.width = `${percentage}%`;
});

// Seek functionality
progressBar.addEventListener('click', (e) => {
  const rect = progressBar.getBoundingClientRect();
  const offsetX = e.clientX - rect.left;
  const width = rect.width;
  const percentage = offsetX / width;
  video.currentTime = percentage * video.duration;
});

// Volume control
volumeControl.addEventListener('input', () => {
  video.volume = volumeControl.value;
});

// Playback speed control
playbackSpeed.addEventListener('change', () => {
  video.playbackRate = playbackSpeed.value;
});

// Skip backward
skipBack.addEventListener('click', () => {
  video.currentTime = Math.max(video.currentTime - 10, 0);
});

// Skip forward
skipForward.addEventListener('click', () => {
  video.currentTime = Math.min(video.currentTime + 25, video.duration);
});

// Handle video loading errors
video.addEventListener('error', () => {
  alert('An error occurred while loading the video. Please try again later.');
});

// Reset play button when video ends
video.addEventListener('ended', () => {
  playPauseButton.textContent = '►';
});