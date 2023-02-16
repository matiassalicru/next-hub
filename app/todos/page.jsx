'use client'

import React, { useEffect } from 'react'
// Components
import Search from './components/Search/Search'
import TodoItem from '../components/TodoItem/TodoItem'
// Styles
import styles from './page.module.css'
// Utils
import { useTodos } from './hooks/useTodos'

const TodolistPage = () => {
  const { handleAddTodo, handleDeleteTodo, handleCheckItem, todoName, setTodoName, todos, setTodos } = useTodos()

  useEffect(() => {
    const oldTodos = localStorage.getItem('todos') || []

    if (oldTodos?.length) {
      setTodos(JSON.parse(oldTodos))
    } else {
      setTodos([])
    }
  }, [setTodos])

  return (
    <section className={styles.main}>
      <Search setText={setTodoName} text={todoName} onSubmit={handleAddTodo} />
      {todos.length
        ? (
          <ul className={styles.list}>
            {todos.map((todo, i) => (
              <li key={i} className={styles.itemList}>
                <TodoItem todo={todo} handleCheckItem={handleCheckItem} handleDeleteTodo={handleDeleteTodo} />
              </li>
            ))}
          </ul>
          )
        : (
          <h2 className={styles.emptyState}>You have completed all your todos 🎉</h2>
          )}
    </section>
  )
}

export default TodolistPage
