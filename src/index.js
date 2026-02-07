import './style.css';
import { appendHome } from './home.js';

const home = document.querySelector('.home-btn');

const main = document.querySelector('main');
appendHome(main);

home.addEventListener('click', () => {
  appendHome(main);
});
