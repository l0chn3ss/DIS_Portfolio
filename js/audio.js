const sound = new Howl({
    src: ['assets/audio/ambient.mp3'],
    volume: 0.3,
    loop: true
  });
  
  window.addEventListener('load', () => {
    sound.play();
  });
  