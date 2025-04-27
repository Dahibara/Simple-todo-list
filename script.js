const addBtn = document.getElementById('add-btn');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

addBtn.addEventListener('click', addTask);
todoInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    const taskText = todoInput.value.trim();
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    const li = document.createElement('li');
    li.textContent = taskText;

    // Mark as completed on click
    li.addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    // Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '×';
    deleteBtn.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent marking completed when deleting
        todoList.removeChild(li);
    });

    li.appendChild(deleteBtn);
    todoList.appendChild(li);

    todoInput.value = ''; // Clear input
}

deleteBtn.addEventListener('click', function(event) {
    event.stopPropagation();
    li.style.opacity = '0';
    setTimeout(() => {
        todoList.removeChild(li);
    }, 300); // Wait for the fade-out transition
});