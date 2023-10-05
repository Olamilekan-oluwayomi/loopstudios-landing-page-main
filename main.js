const openMenu = document.getElementById('openmenu');
const closeMenu = document.getElementById('closemenu');
const navBar = document.getElementById('menudisplay');
const scroll = document.querySelector('.nav__links');

const displayMenu = () => {
  navBar.classList.toggle('hidden');
  navBar.classList.toggle('flex');
  openMenu.classList.toggle('hidden');
  closeMenu.classList.toggle('hidden');
};

openMenu.addEventListener('click', displayMenu);
closeMenu.addEventListener('click', displayMenu);

scroll.addEventListener('click', function (e) {
  e.preventDefault();

  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');

    console.log(id);

    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});
