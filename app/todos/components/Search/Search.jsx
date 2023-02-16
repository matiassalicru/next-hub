import styles from './Search.module.css'

const Search = ({ setText, text, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <input type='text' onChange={(e) => setText(e.target.value)} value={text} className={styles.input} placeholder='Write here' />
    </form>
  )
}

export default Search
