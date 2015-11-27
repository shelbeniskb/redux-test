exports.saveData = (data) => {
  localStorage.setItem('todoData', JSON.stringify(data));
}

exports.fetchData = () => {
  let data = localStorage.getItem('todoData');
  return JSON.parse(data) || {
    todos: []
  }
}