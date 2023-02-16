export const saveTodoToLocalStorage = (todos, todo) => {
  if (todos.length > 0) {
    const oldTodos = JSON.parse(localStorage.getItem('todos'))
    oldTodos.push(todo)
    localStorage.setItem('todos', JSON.stringify(oldTodos))
  } else {
    localStorage.setItem('todos', JSON.stringify([todo]))
  }
}

export const updateTodosLocalStorage = (name, value) => {
  localStorage.setItem(name, value)
}
