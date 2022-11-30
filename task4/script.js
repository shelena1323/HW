document.querySelector ('a').addEventListener('click', (event) =>
{
    event.preventDefault();
})

const ref = document.querySelector ('a').addEventListener('click', 
function() {
    this.textContent = prompt('Измените текст ссылки');
})





