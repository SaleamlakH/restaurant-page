import frenchToast from './assets/french-toast.jpg';
import salmonGrillSalad from './assets/salmon-grill-salad.jpg';
import salmonWithSpinach from './assets/salmon-with-spinach.jpg';

const foodLists = [
  { name: 'Salmon grill salad', price: 5, image: salmonGrillSalad },
  { name: 'French toast', price: 7, image: frenchToast },
  { name: 'Salmon with spinach', price: 8, image: salmonWithSpinach },
];

const createMenu = () => {
  const menu = document.createElement('section');
  menu.classList.add('menu')

  const header = document.createElement('h1');
  header.textContent = 'Menu';
  menu.appendChild(header);

  foodLists.forEach((food) => {
    const item = document.createElement('div');
    item.classList.add('menu-item');

    const img = document.createElement('img');
    img.src = food.image;
    item.appendChild(img);

    const name = document.createElement('span');
    name.classList.add('food-name');
    name.textContent = food.name;
    item.appendChild(name);

    const price = document.createElement('span');
    price.classList.add('price');
    price.textContent = food.price;
    item.appendChild(price);

    menu.appendChild(item);
  });

  return menu;
};

export { createMenu };
