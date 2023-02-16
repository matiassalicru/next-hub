import { useEffect, useState } from 'react'
// Utils
import { saveTodoToLocalStorage, updateTodosLocalStorage } from '../utils/saveTodoToLocalStorage'
// Types
import { ITodo } from '../utils/todos.interface'


export const useTodos = () => {
  const [todos, setTodos] = useState<ITodo[]>([])
  const [todoName, setTodoName] = useState('')
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const oldTodos = localStorage.getItem('todos') as string || ''

    if (oldTodos?.length) {
      setTodos(JSON.parse(oldTodos) || {})
    } else {
      setTodos([])
    }
    setLoading(false)
  }, [setTodos])

  const handleAddTodo = (e: any) => {
    e.preventDefault()
    if (todoName.replace(/\s/g, '').length) {
      const todo = { title: todoName, isChecked: false }
      setTodoName('')
      saveTodoToLocalStorage(todos, todo)
      setTodos(todos => [...todos, todo])
    }
  }

  const handleDeleteTodo = (e: any, todoItem: ITodo) => {
    e.preventDefault()
    e.stopPropagation()
    const localTodos = localStorage.getItem('todos') as string
    const copyTodos = JSON.parse(localTodos) || ''
    const filteredTodos = copyTodos.filter((todo: ITodo) => todo.title !== todoItem.title)
    updateTodosLocalStorage('todos', JSON.stringify(filteredTodos))
    setTodos(filteredTodos)
  }

  const handleCheckItem = (todoItem: ITodo) => {
    const copyTodos = JSON.parse(localStorage.getItem('todos') as string)
    copyTodos.forEach((todo: ITodo) => {
      if (todo.title === todoItem.title) todo.isChecked = !todo.isChecked
    })

    updateTodosLocalStorage('todos', JSON.stringify(copyTodos))
    setTodos(copyTodos)
  }

  return { loading, handleAddTodo, handleCheckItem, todos, setTodos, todoName, setTodoName, handleDeleteTodo }
}
