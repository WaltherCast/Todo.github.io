const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const addButton = document.getElementById('addButton');

function addTask() {
  if (taskInput.value.trim() !== '') {
    const taskText = taskInput.value.trim();
    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
      <span>${taskText}</span>
      <button class="editBtn">Editar</button>
      <button class="deleteBtn">Eliminar</button>
    `;
    taskList.appendChild(taskItem);
    taskInput.value = '';
  }
}

addButton.addEventListener('click', addTask);

taskInput.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    addTask();
  }
});

taskList.addEventListener('click', function(event) {
  const target = event.target;

  if (target.classList.contains('deleteBtn')) {
    target.parentElement.remove();
  } else if (target.classList.contains('editBtn')) {
    const taskSpan = target.previousElementSibling;
    const newTaskText = prompt('Escribe tarea a editar:', taskSpan.textContent);
    if (newTaskText !== null) {
      taskSpan.textContent = newTaskText;
    }
  }
});
