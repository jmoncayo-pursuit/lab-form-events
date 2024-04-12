
const todoInput = document.getElementById('todo-input');


const todoList = document.getElementById('todo-list');

todoInput.addEventListener('keypress', function (e) {

  if (e.key === 'Enter') {
    e.preventDefault();


    const todoText = e.target.value.trim();


    if (todoText !== '') {
 
      const todoItem = document.createElement('li');
      todoItem.classList.add('todo-item');

      
      const todoTextSpan = document.createElement('span');
      todoTextSpan.classList.add('todo-item__text');
      todoTextSpan.textContent = todoText;

     
      const deleteButton = document.createElement('button');
      deleteButton.classList.add('todo-item__delete');
      deleteButton.innerHTML = '&times;'; 

      deleteButton.addEventListener('click', function () {
        todoItem.remove(); 
      });

      todoItem.appendChild(todoTextSpan);
      todoItem.appendChild(deleteButton);

      todoList.appendChild(todoItem);

      e.target.value = '';
    }
  }
});
