/* global document */
import '../sass/style.scss';

function createElement(tagName, className) {
    const el = document.createElement(tagName);
    el.classList.add(className);

    return el;
}

function addTask(taskText) {
    if (!taskText.trim()) return;
    
    const task = createElement('li','task-item');
    task.innerText = taskText;
    
    const removeButton = createElement('button', 'remove-task-btn');
    removeButton.innerText = 'Удалить';
    
    document.querySelector('.task-list').prepend(task);
    task.appendChild(removeButton);
    removeButton.addEventListener('click', () => {
        task.remove();
    });
}

const form = document.querySelector('#task-form');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Останавливает перезагрузку страницы
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value;
    addTask(taskText);
    taskInput.value = '';
});
