// Отслеживай на форме событие input, и каждый раз записывай в локальное хранилище объект с полями email и message, в которых сохраняй текущие значения полей формы. Пусть ключом для хранилища будет строка "feedback-form-state".
// При загрузке страницы проверяй состояние хранилища, и если там есть сохраненные данные, заполняй ими поля формы. В противном случае поля должны быть пустыми.
// При сабмите формы очищай хранилище и поля формы, а также выводи объект с полями email, message и текущими их значениями в консоль.
// Сделай так, чтобы хранилище обновлялось не чаще чем раз в 500 миллисекунд. Для этого добавь в проект и используй библиотеку

import * as throttle from 'lodash.throttle';
const input = document.querySelector('input');
const form = document.querySelector('form');
const textarea = document.querySelector('textarea');

form.addEventListener('submit', sendForm);

input.addEventListener('input', getEmail);

textarea.addEventListener('input', getMessage);
const grt = {};
/* змінити конст */
function sendForm(event) {
  event.preventDefault();
  /*  console.log(event.currentTarget);     ---------target/currentTarget-------
  console.log(event.target); */
  event.target.reset();
  //   localStorage.setItem('feedback-form-state');
}

function getEmail(event) {
  const savedEmail = localStorage.getItem('');
}

function getMessage(event) {
  console.dir(event);
  const message = event.currentTarget.value;

  localStorage.setItem('feedback-tx', message);
}

function saveMessage() {
  const savedMessage = localStorage.getItem('feedback-tx');
  //   console.log(savedMessage);
  if (savedMessage) {
    textarea.value = savedMessage;
  }
}
saveMessage();
