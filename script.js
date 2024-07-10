let myName = prompt('what is your name');
let promptDiv = document.getElementsByClassName('prompt');
promptDiv.style.color = 'red';
promptDiv.insertAdjacentHTML('afterend', `<p>Your name is ${myName}</P>`);

