const video1 = new VideoPlayer('video_1', {
  initialVolume: 0.2,
  modClass: 'video_1',
  updateVolume: 0.1,
  isPlayed: video1 => {
    console.log(video1.parent);
    console.log('video playing');
  },
  isPaused: video1 => {
    console.log(video1.parent);
    console.log('paused');
  },
  isEnded: video1 => {
    console.log(video1.parent);
    console.log('ended');
  },
  isMuted: video1 => {
    console.log(video1.parent);
    console.log('muted');
  },
});

const video2 = new VideoPlayer('video_2', {
  initialVolume: 0.2,
  modClass: 'video_2',
  updateVolume: 0.1,
  isPlayed: video2 => {
    console.log(video2.parent);
    console.log('video playing');
  },
  isPaused: video2 => {
    console.log(video2.parent);
    console.log('paused');
  },
  isEnded: video2 => {
    console.log(video2.parent);
    console.log('ended');
  },
  isMuted: video2 => {
    console.log(video2.parent);
    console.log('muted');
  },
});
