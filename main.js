const menuElement = document.querySelector('.menu');

const menuOpenButton = document.getElementById('menu-hamburger');
menuOpenButton.addEventListener('click', openMenu);

function openMenu() {
  menuElement.classList.add('menu-open');
}

const menuCloseButton = document.getElementById('menu-close');
menuCloseButton.addEventListener("click", closeMenu);

function closeMenu() {
  menuElement.classList.remove('menu-open');
}




// there is an element on my page with the ID "click-to-start"
// declare a variable named 'button'
// assign that element to that variable
// using document.querySelector() - JS function that selects an element with the matching CSS selector
const button = document.querySelector("#click-to-start");

// when user clicks on button (which is element with ID 'click-to-start')
button.onclick = function() {
  // declare variable called `name` which will store user input in window prompt
  let name = prompt("What's your name?");

  // window alert with text "Hello, [name]!" - string interpolation
  alert(`Hello, ${name}!`);
}
