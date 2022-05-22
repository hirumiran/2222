const loginSection = document.querySelector('.section-login');
const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input.login-id');
const todoSection = document.querySelector('.section-todo');
const greeting = document.querySelector('.section-todo #greeting');

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginSection.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
	console.log(username)
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
	todoSection.classList.remove('hidden');
  greeting.innerText = `Hello! ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginSection.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
	loginSection.classList.add(HIDDEN_CLASSNAME);
  paintGreetings(savedUsername);
}


