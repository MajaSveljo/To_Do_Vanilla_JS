import { list } from "./renderTodosList.js";
import { fetchTodos } from "./fetchTodos.js";

const testFn = (data, container) => {
  container = data;
};

let test;
fetchTodos(testFn(test));
console.log(test);
