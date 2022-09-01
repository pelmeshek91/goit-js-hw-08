import * as throttle from 'lodash.throttle';

const form = document.querySelector('form');
const SAVED_KEY = 'feedback-form-state';
const formValue = {};

form.addEventListener('input', throttle(onGetData, 500));
form.addEventListener('submit', sendForm);

function onGetData(event) {
  formValue[event.target.name] = event.target.value;

  const { email, message } = formValue;

  localStorage.setItem(SAVED_KEY, JSON.stringify({ email, message }));
  const savedMessage = localStorage.getItem(SAVED_KEY);
  console.log(savedMessage);
}

function sendForm(event) {
  event.preventDefault();
  /*  console.log(event.currentTarget);     
  ---------target/currentTarget-------
  console.log(event.target); */
  event.target.reset();
  localStorage.removeItem(SAVED_KEY);
}
