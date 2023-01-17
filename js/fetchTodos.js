const fetchTodos = (cb) => {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((data) => cb(data))
    .catch((error) => console.log(error));
};

export { fetchTodos };
