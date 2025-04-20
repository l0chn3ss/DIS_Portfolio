const sound = new Howl({
    src: ['assets/audio/background.mp3'],
    loop: true,
    volume: 0.3,
  });
  
  document.getElementById('toggle-audio').addEventListener('click', () => {
    if (sound.playing()) {
      sound.pause();
    } else {
      sound.play();
    }
  });
  