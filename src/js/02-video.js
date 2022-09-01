import Player from '@vimeo/player';
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

const STORAGE_KEY = 'videoplayer-current-time';

player.on(STORAGE_KEY, function (data) {});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});
