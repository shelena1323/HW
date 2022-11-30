document.querySelector ('#ref').addEventListener('click', (event) =>
{
    event.preventDefault();
    console.log('Вы изменили название ссылки')
})

const ref = document.querySelector ('#ref').addEventListener('click', 
function() {
    this.textContent = prompt('Измените текст ссылки');
})





