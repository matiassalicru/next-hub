import { useState } from 'react'
import { saveTodoToLocalStorage, updateTodosLocalStorage } from '../utils/saveTodoToLocalStorage'

export const useTodos = () => {
  const [todos, setTodos] = useState([])
  const [todoName, setTodoName] = useState('')

  const handleAddTodo = (e) => {
    e.preventDefault()
    if (todoName.replace(/\s/g, '').length) {
      const todo = { title: todoName, isChecked: false }
      setTodoName('')
      saveTodoToLocalStorage(todos, todo)
      setTodos(todos => [...todos, todo])
    }
  }

  const handleDeleteTodo = (e, todoItem) => {
    e.preventDefault()
    e.stopPropagation()
    const copyTodos = JSON.parse(localStorage.getItem('todos'))
    const filteredTodos = copyTodos.filter(todo => todo.title !== todoItem.title)
    updateTodosLocalStorage('todos', JSON.stringify(filteredTodos))
    setTodos(filteredTodos)
  }

  const handleCheckItem = (todoItem) => {
    const copyTodos = JSON.parse(localStorage.getItem('todos'))
    copyTodos.forEach(todo => {
      if (todo.title === todoItem.title) todo.isChecked = !todo.isChecked
    })

    updateTodosLocalStorage('todos', JSON.stringify(copyTodos))
    setTodos(copyTodos)
  }

  return { handleAddTodo, handleCheckItem, todos, setTodos, todoName, setTodoName, handleDeleteTodo }
}
