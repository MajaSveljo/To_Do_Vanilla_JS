const fetchTodos = (container) => {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < 11; i++) {
        let li = document.createElement("li");
        li.innerHTML = `<label><input type='checkbox' id='${data[i].id}' name='${data[i].title}' value='${data[i].title}' /> ${data[i].title}</label>`;
        container.append(li);
      }
    })
    .catch((error) => console.log(error));
};

export { fetchTodos };
