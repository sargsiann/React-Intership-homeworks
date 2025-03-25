"use strict"

let todos = [];
let dones = [];
let todoInput = document.getElementById("todoInput");
let	addButton = document.getElementById("addButton");
let todoDiv = document.getElementById("todoDiv");
let donesDiv = document.getElementById("donesDiv");



function	showMessage(val) {
	val.style.color = 'red';
	if (todos.includes(val.value)) {
		val.value = 'Task is already added';
	}
	else
		val.value = 'Write a Task !';
	val.disabled = true;
	setTimeout(() => {
		val.disabled = false;
		val.style.color = 'black';
		val.value = '';
	},700);
}

function	addTodo() {
	let val = todoInput.value;

	// SECTION FOR ERROR HANDLING AND SHOWING CHECKING THE TASK AVAILABILITY
 	if (!val || todos.includes(val))
	{
		showMessage(todoInput);
		return;
	}
	todos.push(val);
	todoInput.val = '';

	// SECTION FOR TASK CREATING AND APPENDING

	let popup;

	let taskDiv = document.createElement('div');
	taskDiv.classList.add('d-flex', 'justify-content-between', 'p-2', 'mb-2', 'border');

	let checkbox = document.createElement('input');
	checkbox.type = 'checkbox';
	checkbox.classList.add('form-check-input');
	
	let taskName = document.createElement('p');
	taskName.classList.add('m-0');

	let delButton = document.createElement('button');
	delButton.classList.add('btn', 'btn-danger', 'btn-sm');

	let editButton = document.createElement('button');
	editButton.classList.add('btn', 'btn-warning', 'btn-sm', 'ms-2');

	delButton.innerText = 'Delete';


	editButton.innerText = 'Edit';
	taskName.innerText = val;
	taskDiv.appendChild(checkbox);
	taskDiv.appendChild(taskName);
	taskDiv.appendChild(delButton);
	taskDiv.appendChild(editButton);
	todoDiv.appendChild(taskDiv);

	// SECTION FOR MOVING TASK FROM TO DOS TO DONES AND OPPOSITE

	checkbox.onclick = (() => {
		if (checkbox.checked) {
			donesDiv.appendChild(taskDiv);
			let index = todos.findIndex((i) => i == val);
			todos.splice(index,1);
		}
		else{
			todoDiv.append(taskDiv);
			todos.push(val);
		}
	})

	// SECTION FOR DELETING

	delButton.onclick = (() => {
		taskDiv.remove();
		let index = todos.findIndex((i) => i == val);
		todos.splice(index,1);
	})

	// SECTION FOR EDITING TASK 

	editButton.onclick = (() => {
		popup = document.createElement('div');
		popup.innerHTML = `
			<div style="
            position: fixed; 
            top: 50%; left: 50%; 
            transform: translate(-50%, -50%);
            background: white; 
            padding: 20px; 
            border: 1px solid black; 
            z-index: 1000;">
            <p>Hello! Simple popup!</p>
            <button id="closePopup">Close</button>
        </div>
		`;
		taskDiv.appendChild(popup);
	})

	let closePopup = document.getElementById('closePopup');

	closePopup.onclick = (() => {
		popup.remove();
	})

	todoInput.value = '';
}

addButton.onclick = addTodo;
