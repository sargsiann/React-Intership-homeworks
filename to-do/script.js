"use strict"

let todos = [];
let dones = [];
let editval;
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

function createPopup(title, placeholder) {
    // Create popup container
    return new Promise((res,rej) => {
	let popup = document.createElement('div');
	let submit;
	let close;
	let val;
    popup.innerHTML = `
        <div id="popup-overlay" style="
            position: fixed; 
            top: 0; left: 0; 
            width: 100%; height: 100%;
            background: rgba(0, 0, 0, 0.5);
            display: flex; 
            justify-content: center; 
            align-items: center; 
            z-index: 1000;
            animation: fadeIn 0.3s;">

            <div id="popup-content" style="
                background: white; 
                padding: 30px; 
                border-radius: 16px; 
                box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3); 
                text-align: center; 
                max-width: 400px;
                animation: slideUp 0.4s;">
                
                <h2 style="margin-top: 0; color: #4A4A4A;">${title}</h2>
                <input id="popupInput" type="text" placeholder="${placeholder}" style="
                    padding: 10px; 
                    width: 80%; 
                    border: 1px solid #ccc; 
                    border-radius: 8px; 
                    outline: none;
                    font-size: 14px;">

                <div style="margin-top: 20px;">
                    <button id="submitPopup" style="
                        padding: 10px 20px; 
                        background: #4CAF50; 
                        color: white; 
                        border: none; 
                        border-radius: 8px; 
                        cursor: pointer;">
                        Submit
                    </button>

                    <button id="closePopup" style="
                        padding: 10px 20px; 
                        background: #f44336; 
                        color: white; 
                        border: none; 
                        border-radius: 8px; 
                        margin-left: 10px; 
                        cursor: pointer;">
                        Close
                    </button>
                </div>
            </div>
        </div>

        <style>
            @keyframes fadeIn {
                from { opacity: 0; } 
                to { opacity: 1; }
            }
            @keyframes slideUp {
                from { transform: translateY(50px); opacity: 0; } 
                to { transform: translateY(0); opacity: 1; }
            }
        </style>
    `;

    document.body.appendChild(popup);

	submit = document.getElementById('submitPopup');
	close = document.getElementById('closePopup');

	submit.onclick = () => {
		val = document.getElementById('popupInput').value;
		popup.remove();
		if (todos.includes(val))
			rej(val);
		res(val);
	}
	
	close.onclick = () => {
		popup.remove();
		rej(undefined);
	}
	})
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
		let a = createPopup();
		a.then((v) => {
			let index = todos.findIndex((i) => i == val);
			todos[index] = v;
			taskName.innerHTML = v;
		});
	})

	let closePopup = document.getElementById('closePopup');

	closePopup.onclick = (() => {
		popup.remove();
	})

	todoInput.value = '';
}

addButton.onclick = addTodo;
