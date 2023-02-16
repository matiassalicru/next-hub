import Image from 'next/image'
import styles from './TodoItem.module.css'
import closedBin from '../../../assets/closedBin.png'

const TodoItem = ({ todo, handleCheckItem, handleDeleteTodo }) => {
  const isCheckedClass = todo.isChecked ? styles.checked : ''

  return (
    <div className={`${styles.todoItem} ${isCheckedClass}`} onClick={() => handleCheckItem(todo)}>
      <input type='checkbox' checked={todo.isChecked} readOnly />
      <p>{todo.title}</p>
      {todo.isChecked && (
        <div className={styles.imageContainer}>
          <Image alt='bin' src={closedBin} width={20} onClick={(e) => handleDeleteTodo(e, todo)} />
        </div>
      )}
    </div>
  )
}

export default TodoItem
