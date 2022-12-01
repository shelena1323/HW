document.querySelector ('#ref').addEventListener('click', (event) =>
{
    event.preventDefault();
})

const ref = document.querySelector ('#ref').addEventListener('click', 
function() {
    this.textContent = prompt('Измените текст ссылки');
    console.log('Вы изменили название ссылки')
})





