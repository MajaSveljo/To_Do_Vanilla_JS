const createCheckbox = (data) => {
  let li = document.createElement("li");
  li.innerHTML = `<label><input type='checkbox' id='${data.id}' name='${data.title}' value='${data.title}' /> ${data.title}</label>`;
  return li;
};

export { createCheckbox };
