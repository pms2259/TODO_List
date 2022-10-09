const button = document.getElementById('button');
const input = document.getElementById('input');
const list = document.getElementById('list');

button.addEventListener('click', clickButton);

function clickButton() {
    const temp = document.createElement('li');
    temp.innerHTML = input.value;
    list.appendChild(temp);
}