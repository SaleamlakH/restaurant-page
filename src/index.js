import './style.css';
import { createHeroSection } from './home.js';

const home = document.querySelector('.home-btn');

const main = document.querySelector('main');
main.appendChild(createHeroSection());

home.addEventListener('click', () => {
  main.replaceChildren(createHeroSection());
});
