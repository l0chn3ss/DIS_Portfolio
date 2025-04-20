// audio.js
const sound = new Howl({
    src: ['assets/audio/fire.mp3'],
    volume: 0.5, // Set volume (0 to 1)
    preload: true, // Preload the audio
  });
  
  // Function to play the audio when a project is clicked
  function playClickSound() {
    sound.play();
  }
  