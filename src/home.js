const createHeroSection = () => {
  const heroSection = document.createElement('section');
  const heroText = document.createElement('div');
  const heroHeader = document.createElement('h1');
  const heroDescription = document.createElement('span');

  // --- Hero Section --- //

  // header
  heroHeader.textContent = 'Welcome to\nOur Restaurant';
  heroHeader.classList.add('hero-header');
  heroText.appendChild(heroHeader);

  // descriptive text
  heroDescription.textContent = 'Lorem, ipsum dolor sit amet consectetur!';
  heroText.appendChild(heroDescription);

  heroSection.classList.add('hero-section');
  heroSection.appendChild(heroText);

  return heroSection;
};

export const appendHome = (container) => {
  const heroSection = createHeroSection();

  container.append(heroSection);
};
