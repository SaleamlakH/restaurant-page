import './style.css';
import { createHeroSection } from './home.js';
import { createMenu } from './menu.js';

const home = document.querySelector('.home-btn');
const menu = document.querySelector('.menu-btn');

const main = document.querySelector('main');
main.appendChild(createHeroSection());

home.addEventListener('click', () => {
  main.replaceChildren(createHeroSection());
  main.classList.remove('menu-page');
});

menu.addEventListener('click', () => {
  main.replaceChildren(createMenu());
  main.classList.add('menu-page');
});
