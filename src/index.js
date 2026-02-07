import './style.css';
import { createHeroSection } from './home.js';
import { createMenu } from './menu.js';
import { createContactPage } from './contact.js';

const home = document.querySelector('.home-btn');
const menu = document.querySelector('.menu-btn');
const contact = document.querySelector('.contact-btn');

const main = document.querySelector('main');
main.appendChild(createHeroSection());

home.addEventListener('click', () => {
  main.replaceChildren(createHeroSection());
  main.classList.remove('menu-page', 'contact-page');
});

menu.addEventListener('click', () => {
  main.replaceChildren(createMenu());
  main.classList.add('menu-page');
  main.classList.remove('contact-page');
});

contact.addEventListener('click', () => {
  main.replaceChildren(createContactPage());
  main.classList.add('contact-page');
  main.classList.remove('main-page');
});
