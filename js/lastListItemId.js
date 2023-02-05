const lastListItemId = (list) => {
  const lis = list.getElementsByClassName("todo-item");

  return parseInt(lis[lis.length - 1].id);
};

export { lastListItemId };
