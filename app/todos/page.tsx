'use client'

// Components
import Search from './components/Search/Search'
import TodoItem from '../components/TodoItem/TodoItem'
import LoadingPage from '../components/Loading/loading'
// Styles
import styles from './page.module.css'
// Utils
import { useTodos } from './hooks/useTodos'

const TodolistPage = () => {
  const {
    handleAddTodo,
    handleDeleteTodo,
    handleCheckItem,
    todoName,
    setTodoName,
    todos,
    loading,
  } = useTodos()

  return (
    <section className={styles.main}>
      <Search setText={setTodoName} text={todoName} onSubmit={handleAddTodo} />
      {loading && <LoadingPage />}
      {todos.length > 0 && (
        <ul className={styles.list}>
          {todos.map((todo, i) => (
            <li key={i} className={styles.itemList}>
              <TodoItem
                todo={todo}
                handleCheckItem={handleCheckItem}
                handleDeleteTodo={handleDeleteTodo}
              />
            </li>
          ))}
        </ul>
      )}
      {(!loading && todos.length === 0) && (
        <h2 className={styles.emptyState}>
          You have completed all your todos 🎉
        </h2>
      )}
    </section>
  )
}

export default TodolistPage
