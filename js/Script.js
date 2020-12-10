var button = document.querySelector('button')
var body = document.querySelector('body')
const colors = ['black', 'blue', 'green', 'yellow', 'purple']

i = 0;
body.style.backgroundColor = colors[i];

button.addEventListener('click', changeColor)


function changeColor() {
    i++;
    body.style.backgroundColor = colors[i];
    if (i >= 4) {
        i = -1
        }
}



