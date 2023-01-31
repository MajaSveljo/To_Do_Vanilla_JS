const createCheckbox = (data) => {
  let li = document.createElement("li");
  li.className = "todo-item";
  li.innerHTML = `<label class="todo-label"><input class="todo-checkbox" type='checkbox' id='${data.id}' name='${data.title}' value='${data.title}' /> ${data.title}</label><span class="delete-todo">X</span>`;
  return li;
};

export { createCheckbox };
