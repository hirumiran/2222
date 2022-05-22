const todoForm = document.getElementById('todo-form');
const todoInput = todoForm.querySelector('input');
const todoList = document.getElementById('todo-list');
const TODOS_KEY = "todos";

let toDos = [];
const colors = ['#d49b41', '#c8447d', '#f0636b', '#01b3bf', '#fff475', '#ffffff'];

function getRadomcolor() {
	const randomColor = colors[Math.floor(Math.random() * colors.length)];
	return randomColor;
}

function saveTodos() {
	localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // to string
}

function deleteTodo(event) {
	const target = event.target;
	let li;
	if(target.classList.contains('fa-trash-can')) {
		li = event.target.parentElement.parentElement;
	} else {
		li = event.target.parentElement;
	}
	li.remove();
	toDos = toDos.filter((item) => item.id !== parseInt(li.id));
	saveTodos();
}

function paintTodo(newTodoObj) {
	const li = document.createElement('li');
	li.id = newTodoObj.id;
	const span = document.createElement('span');
	span.innerText = newTodoObj.text;
	const button = document.createElement('button');	
	const buttonIcon = document.createElement('i');
	buttonIcon.classList.add('fa-solid');
	buttonIcon.classList.add('fa-trash-can');
	button.appendChild(buttonIcon);
	button.addEventListener('click', deleteTodo);

	li.appendChild(span);
	li.appendChild(button);	
	li.style.background = newTodoObj.bgColor;
	todoList.appendChild(li);
}

function handleTodoSubmit(event) {
	event.preventDefault();
	const newTodo = todoInput.value;
	todoInput.value = '';
	
	const newTodoObj = {
		text: newTodo,
		id: Date.now(),
		bgColor: getRadomcolor()
	}
	toDos.push(newTodoObj);
	paintTodo(newTodoObj);
	saveTodos();
}

todoForm.addEventListener('submit', handleTodoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos) {
	const parseTodos = JSON.parse(savedToDos);
	toDos = parseTodos;
	parseTodos.forEach(paintTodo);
}