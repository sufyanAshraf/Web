//============================================
//-----------  STEP - 1 ----------------------
//============================================


/*var todos = [];
function add() {
    var task = document.getElementById("task").value;
    todos.push(task);
    document.getElementById('todos').innerText = todos;
}*/
getElementById it returns the element that has the ID attribute with the 
specified value.
push add task in todos array
.innerText display task
*/

//============================================
//-----------  STEP - 2 ----------------------
//============================================


/*var todos = [];
function add() {
    var task = document.getElementById('task').value;
    todos.push(task);
    document.getElementById('task').value = '';
    show();
}

function show() {
    var ul = document.createElement('ul');
    ul.classList.add("list-group");
    for(var i=0; i<todos.length; i++){
        var li = document.createElement('li');
        li.innerHTML  = '<li>' + todos[i] + '</li>';
        li.classList.add("list-group-item");
        ul.appendChild(li);
    }
    document.getElementById('todos').appendChild(ul);
}
*/
/*
createElement creat un-ordered list as we pass ul in it.
classList returns the class name of an element as object and 
.add add the list to it.
document.createElement('li'), it creats element list as we pass li in it.
li.innerHTML, it Specifies the HTML content of an li.
ul.appendChild(li), it add element li in ul.
appendChild(ul) it add element ul in document.
*/

//============================================
//-----------  STEP - 3 ----------------------
//============================================


/*
function getTodos() {
    var todos = [];
    var todos_str = localStorage.getItem('todo');
    if(todos_str !== null)
        todos = JSON.parse(todos_str);
    return todos;
}

function add() {
    var task = document.getElementById('task').value;
    if(task.trim() == ''){
        document.getElementById('message').style.display = 'block';
        return false;
    } else {
        document.getElementById('message').style.display = 'none';
    }
    var todos = getTodos();
    todos.push({task: task});
    document.getElementById('task').value = '';
    localStorage.setItem('todo',JSON.stringify(todos));
    show();
}

function show() {
    document.getElementById('todos').innerText = '';
    var todos = getTodos();
    var ul = document.createElement('ul');
    ul.classList.add("list-group");
    for(var i=0; i<todos.length; i++){
        var li = document.createElement('li');
        li.innerHTML  = '<li>' + todos[i].task + '</li>' +
            '<button class="btn btn-danger">' +
            '<i class="fas fa-trash-o"></i> ' +
            '<span class="d-none d-sm-inline"> Delete </span> </button>';
        li.classList.add("list-group-item");
        ul.appendChild(li);
    }
    document.getElementById('todos').appendChild(ul);
}
show();
*/

/*
JSON.parse exchange data.
.trim() it removes whitespace from both sides of a string.
.display it returns the element's display type
.push it adds new items to the end of an array.
localStorage object stores the data and it will not be deleted when the browser
 is closed, and will be available the time.
.setItem it adds new data in localStorage.
*/



//============================================
//-----------  STEP - 4 ----------------------
//============================================


/*function getTodos() {
    var todos = [];
    var todos_str = localStorage.getItem('todo');
    if(todos_str !== null)
        todos = JSON.parse(todos_str);
    return todos;
}

function add() {
    var task = document.getElementById('task').value;
    if(task.trim() == ''){
        document.getElementById('message').style.display = 'block';
        return false;
    } else {
        document.getElementById('message').style.display = 'none';
    }
    var todos = getTodos();
    todos.push({task: task, isDone: false});
    document.getElementById('task').value = '';
    localStorage.setItem('todo',JSON.stringify(todos));
    show();
    return false;
}

function remove() {
    var id = this.getAttribute('id');
    var todos = getTodos();
    todos.splice(id,1);
    localStorage.setItem('todo',JSON.stringify(todos));
    show();
    return false;
}

function show() {
    document.getElementById('todos').innerText = '';
    var todos = getTodos();
    var ul = document.createElement('ul');
    ul.classList.add("list-group");
    for(var i=0; i<todos.length; i++){
        var li = document.createElement('li');
        li.innerHTML  = '<li>' + todos[i].task + '</li>' +
            '<button class="btn btn-danger" id="' + i + '">' +
            '<i class="fa fa-trash-o"></i> ' +
            '<span class="d-none d-sm-inline"> Delete </span> </button>';
        li.classList.add("list-group-item");
        if(todos[i].isDone)
            li.classList.add("done");
        ul.appendChild(li);
    }
    document.getElementById('todos').appendChild(ul);
    var buttons = document.getElementsByClassName('btn-danger');
    for(var i=0; i<buttons.length; i++){
        buttons[i].addEventListener('click',remove);
    }
}

function isDone(e) {
    var todos = getTodos();
    if(todos[e.target.id].isDone) {
        e.target.classList.add('done');
        todos[e.target.id].isDone = false;
    }
    else{
        e.target.classList.remove('done');
        todos[e.target.id].isDone = true;
    }
    localStorage.setItem('todo',JSON.stringify(todos));
    show();
}
show();*/

/*
JSON.parse exchange data.
.trim() it removes whitespace from both sides of a string.
.display it returns the element's display type
.push it adds new items to the end of an array.
localStorage object stores the data and it will not be deleted when the browser
 is closed, and will be available the time.
.setItem it adds new data in localStorage.
getAttribute it will get the id
.splice(id,1) it will remove the element whoes id is given

*/





//============================================
//-----------  STEP - 5 ----------------------
//============================================

/*

CLASS ACTIVITY (HOME WORK) :

1- Enable State of todos by clicking on the text completed, started etc
HINT: use text-decoration:line-through; property of CSS

2- Enable Editing todos in text field to update text



*/

function getTodos() {
    var todos = [];
    var todos_str = localStorage.getItem('todo');
    if(todos_str !== null)
        todos = JSON.parse(todos_str);
    return todos;
}

function add() {
    var task = document.getElementById('task').value;
    if(task.trim() == ''){
        document.getElementById('message').style.display = 'block';
        return false;
    } else {
        document.getElementById('message').style.display = 'none';
    }
    var todos = getTodos();
    todos.push({task: task, isDone: false});
    document.getElementById('task').value = '';
    localStorage.setItem('todo',JSON.stringify(todos));
    show();
    return false;
}

function remove() {
    var id = this.getAttribute('id');
    var todos = getTodos();
    todos.splice(id,1);
    localStorage.setItem('todo',JSON.stringify(todos));
    show();
    return false;
}

function show() {
    document.getElementById('todos').innerText = '';
    var todos = getTodos();
    var ul = document.createElement('ul');
    ul.classList.add("list-group");
    for(var i=0; i<todos.length; i++){
        var li = document.createElement('li');
        li.innerHTML  = '<li>' + todos[i].task + '</li>' +
            '<button class="btn btn-danger" id="' + i + '">' +
            '<i class="fa fa-trash-o"></i> ' +
            '<span class="d-none d-sm-inline"> Delete </span> </button>' +
			'<button onclick="change('+i+')" class="btn btn-info mr-2" id="' + i + '">' +
            '<i class="fa fa-pencil"></i> ' +
            '<span class="d-none d-sm-inline"> Mark As Done </span> </button>' +
			'<button class="btn btn-success mr-2" id="' + i + '">' +
            '<i class="fa fa-pencil"></i> ' +
            '<span class="d-none d-sm-inline"> Edit </span> </button>' +
			'<button onclick="edited('+i+')" class="btn btn-warning d-none mr-2" id="' + i + '">' +
            '<i class="fa fa-pencil"></i> ' +
            '<span class="d-none d-sm-inline"> Save </span> </button>' + 
			'<input id="'+i+'" value="'+todos[i].task+'" class="form-control d-none">';
			
        li.classList.add("list-group-item");
        if(todos[i].isDone)
            li.classList.add("done");
        ul.appendChild(li);
    }
    document.getElementById('todos').appendChild(ul);
    var buttons = document.getElementsByClassName('btn-danger');
    for(var i=0; i<buttons.length; i++){
        buttons[i].addEventListener('click',remove);
    }
	 document.getElementById('todos').appendChild(ul);
    var buttons = document.getElementsByClassName('btn-success');
    for(var i=0; i<buttons.length; i++){
        buttons[i].addEventListener('click',savechanges);
    }
	
 
}

function change(id) {
	var todos = getTodos();
    todos[id].isDone = true;
    localStorage.setItem('todo',JSON.stringify(todos));
    show();
    return false;
}

function edited(id) {
	var todos = getTodos();
	var inputArr = document.querySelectorAll('input');
	var elm = inputArr[parseInt(id) + 1];
	todos[id].task = elm.value;
    localStorage.setItem('todo',JSON.stringify(todos));
    show();
    return false;	
}
function savechanges()
{
	var id = this.getAttribute('id');
	var btn = document.querySelectorAll('button')[3].classList.add('d-none');
	document.querySelectorAll('button')[4].classList.remove('d-none');
	var input = document.querySelectorAll('input')[parseInt(id) + 1].classList.remove('d-none');
	
	
}

function isDone(e) {
    var todos = getTodos();
    if(todos[e.target.id].isDone) {
        e.target.classList.add('done');
        todos[e.target.id].isDone = false;
    }
    else{
        e.target.classList.remove('done');
        todos[e.target.id].isDone = true;
    }
    localStorage.setItem('todo',JSON.stringify(todos));
    show();
}
show();
