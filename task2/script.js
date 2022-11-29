const  consoleLog = document.querySelector('#consoleLog');

consoleLog.addEventListener('click', () => {
alert('Служит для вывода сообщения в консоль');
}) 

const  Alert = document.querySelector('#alert');

Alert.addEventListener('click', () => {
alert('Служит для вывода сообщения в браузере для пользователя');
})

const  Prompt = document.querySelector('#prompt');

Prompt.addEventListener('click', () => {
alert('Служит для вывода в браузер поля для ввода текста пользователем');
})

