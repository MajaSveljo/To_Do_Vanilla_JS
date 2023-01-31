const deleteTodo = (id) => {
  const todoToDelete = document.getElementById(id);
  todoToDelete.remove();
};

export { deleteTodo };
