import { createCheckbox } from "./createCheckbox.js";

const fetchTodos = (container) => {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i <= 10; i++) {
        const li = createCheckbox(data[i]);
        container.append(li);
      }
    })
    .catch((error) => console.log(error));
};

export { fetchTodos };
