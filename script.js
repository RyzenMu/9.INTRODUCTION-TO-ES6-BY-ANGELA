let myName = prompt('what is your name');
let promptDiv = document.getElementsByClassName('prompt')[0];
promptDiv.style.color = 'red';
promptDiv.insertAdjacentHTML('afterend', `<p>Your name is ${myName}</P>`);
const lengthOfName = promptDiv.length;
promptDiv.insertAdjacentHTML('afterend', `<h2>The length of your name is ${lengthOfName}</h2>`)

