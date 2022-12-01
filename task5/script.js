let button = document.querySelector ('button');
let input = document.querySelector('input');

document.querySelector ('button').addEventListener('click', (event) =>
{
event.preventDefault();
})

button.onclick = function () {
let A = document.querySelector ('#input').value;
console.log(A);
document.querySelector ('#duplicateField').textContent = A;
input.value = '';
}
