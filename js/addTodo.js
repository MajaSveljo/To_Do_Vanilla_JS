import { createTodoObject } from "./createTodoObject.js";
import { createTodo } from "./createHTMLElements.js";

const addTodo = (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();

    if (!event.target.value) {
      return;
    }

    let list = document.getElementById("todos");
    const todoData = createTodoObject(list, event.target.value);
    const todo = createTodo(todoData);
    list.append(todo);
  }
};

export { addTodo };
