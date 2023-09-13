const openMenu = document.getElementById('openmenu');
const closeMenu = document.getElementById('closemenu');
const navBar = document.getElementById('menudisplay');

const displayMenu = () => {
  navBar.classList.toggle('hidden');
  navBar.classList.toggle('flex');
  openMenu.classList.toggle('hidden');
  closeMenu.classList.toggle('hidden');
};

openMenu.addEventListener('click', displayMenu);
closeMenu.addEventListener('click', displayMenu);
