let button = document.querySelector ('button');
let input = document.querySelector('input');

button.onclick = function () {
let A = document.querySelector ('#input').value;
console.log(A);
document.querySelector ('#duplicateField').textContent = A;
input.value = '';
}