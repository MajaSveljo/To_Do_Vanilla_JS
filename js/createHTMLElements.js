import { deleteTodo } from "./deleteTodo.js";

const createTodoLi = (data) => {
  let li = document.createElement("li");
  li.className = "todo-item";
  li.innerHTML = `<label class="todo-label"><input class="todo-checkbox" type='checkbox' id='${data.id}' name='${data.title}' value='${data.title}' /> ${data.title}</label>`;
  li.id = data.id;

  return li;
};

const createDeleteTodoSpan = (todoId) => {
  let deleteTodoSpan = document.createElement("span");
  deleteTodoSpan.className = "delete-todo";
  deleteTodoSpan.id = todoId;
  deleteTodoSpan.innerHTML = "X";
  deleteTodoSpan.addEventListener("click", (event) =>
    deleteTodo(event.target.id)
  );

  return deleteTodoSpan;
};

const createCheckbox = (data) => {
  let li = createTodoLi(data);
  let deleteTodoSpan = createDeleteTodoSpan(data.id);
  li.appendChild(deleteTodoSpan);
  return li;
};

export { createCheckbox };
