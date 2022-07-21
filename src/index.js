document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.getElementById('create-task-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    buildToDo(e.target["new-task-description"].value);
    form.reset();
  });
});

function buildToDo(todo) {
  let li = document.createElement('li');
  let btn = document.createElement('button');
  btn.addEventListener('click', handleDelete);
  btn.textContent = 'x';
  li.textContent = `${todo} `;
  li.appendChild(btn);
  console.log(li);
  document.querySelector('#tasks').appendChild(li);
}

function handleDelete(e) {
  e.target.parentNode.remove();
}


