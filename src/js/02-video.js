import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const seconds = Number(localStorage.getItem('videoplayer-current-time'));
player.setCurrentTime(seconds);

player.on('timeupdate', throttle(() => {
  player
    .getCurrentTime()
    .then(result => {
      localStorage.setItem('videoplayer-current-time', result);
    })
    .catch(error => console.log(error));
}, 1000));
