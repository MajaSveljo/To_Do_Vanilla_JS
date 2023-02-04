import { deleteTodo } from "./deleteTodo.js";

const createCheckbox = (data) => {
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "todo-checkbox";
  checkbox.id = `checkbox ${data.id}`;

  checkbox.addEventListener("click", (event) =>
    deleteTodo(event.target.id.split(" ")[1])
  );

  return checkbox;
};

const createLabel = (data) => {
  let label = document.createElement("label");
  label.className = "todo-label";
  const text = document.createTextNode(`${data.title}`);
  label.appendChild(createCheckbox(data));
  label.appendChild(text);

  return label;
};

const createTodoLi = (data) => {
  let li = document.createElement("li");
  li.className = "todo-item";
  let label = createLabel(data);
  li.appendChild(label);
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

const createTodo = (data) => {
  let li = createTodoLi(data);
  let deleteTodoSpan = createDeleteTodoSpan(data.id);
  li.appendChild(deleteTodoSpan);
  return li;
};

export { createTodo };
