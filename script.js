let myName = prompt('what is your name');
let promptDiv = document.getElementsByClassName('prompt')[0];
promptDiv.style.color = 'blue';
promptDiv.insertAdjacentHTML('afterend', `<p>Your name is ${myName}</P>`);
const lengthOfName = myName.length;
promptDiv.insertAdjacentHTML('afterend', `<h2>The length of your name is ${lengthOfName}</h2>`)

// String Slice
function sliceButton(){
    const sliceString = prompt("Enter the string to be sliced");
    const slicedString = sliceString.slice(0, 10);
    document.querySelector('#sliceResult').innerText = slicedString;
}

