// frontend/app.js - simple fetch-based UI for Task Manager
const form = document.getElementById('task-form');
const input = document.getElementById('task-input');
const tasksUl = document.getElementById('tasks');

async function fetchTasks() {
  const res = await fetch(API_URL);
  const tasks = await res.json();
  tasksUl.innerHTML = '';
  tasks.forEach(renderTask);
}

function renderTask(task) {
  const li = document.createElement('li');
  li.className = task.completed ? 'completed' : '';
  li.innerHTML = `
    <span class="title">${escapeHtml(task.title)}</span>
    <div class="actions">
      <button data-id="${task._id}" class="toggle">${task.completed ? 'Undo' : 'Done'}</button>
      <button data-id="${task._id}" class="delete">Delete</button>
    </div>
  `;
  const toggleBtn = li.querySelector('.toggle');
  const deleteBtn = li.querySelector('.delete');

  toggleBtn.addEventListener('click', async () => {
    await fetch(API_URL + '/' + task._id, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ completed: !task.completed })
    });
    fetchTasks();
  });

  deleteBtn.addEventListener('click', async () => {
    await fetch(API_URL + '/' + task._id, { method: 'DELETE' });
    fetchTasks();
  });

  tasksUl.appendChild(li);
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const title = input.value.trim();
  if (!title) return;
  await fetch(API_URL, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ title })
  });
  input.value = '';
  fetchTasks();
});

// simple XSS-safe text escaper
function escapeHtml(str) {
  return str.replace(/[&<>"']/g, (m) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":"&#39;"}[m]));
}

// load tasks on start
fetchTasks();