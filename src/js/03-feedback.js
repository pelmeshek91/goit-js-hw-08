import * as throttle from 'lodash.throttle';

const form = document.querySelector('form');
const SAVED_KEY = 'feedback-form-state';
const formValue = {};

form.addEventListener('input', throttle(onGetData, 500));
form.addEventListener('submit', sendForm);

function onGetData(event) {
  formValue[event.target.name] = event.target.value; /* запитати у Руслана */
  console.dir(formValue);
  const { email, message } = formValue;
  localStorage.setItem(SAVED_KEY, JSON.stringify({ email, message }));
}

function saveMessage() {
  const obj = JSON.parse(localStorage.getItem(SAVED_KEY));
  const textarea = document.querySelector('textarea');
  const input = document.querySelector('input');
  if (localStorage.getItem(SAVED_KEY)) {
    textarea.value = obj.message;
    input.value = obj.email;
  }
}
saveMessage();

function sendForm(event) {
  event.preventDefault();
  console.log(formValue);
  event.target.reset(); /* запитати у Руслана про currentTarget/target */
  localStorage.removeItem(SAVED_KEY);
}
