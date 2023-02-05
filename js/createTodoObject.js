import { lastListItemId } from "./lastListItemId.js";

const createTodoObject = (list, title) => {
  const todoData = {
    id: lastListItemId(list) + 1,
    title: title,
  };

  return todoData;
};

export { createTodoObject };
