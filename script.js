let myName = prompt('what is your name');
let promptDiv = document.getElementsByClassName('.prompt');
promptDiv.insertAdjacentHTML('afterend', `<p>Your name is ${myName}</P>`);