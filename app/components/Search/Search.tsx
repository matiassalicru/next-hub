import styles from './Search.module.css'

interface SearchInterface {
  setText: any
  text: string
  onSubmit: (e: any) => void
}

const Search = ({ setText, text, onSubmit }: SearchInterface): any => {
  return (
    <div className={styles.form}>
      <form onSubmit={(e) => onSubmit(e)}>
        <input
          type='text'
          onChange={(e) => setText(e.target.value)}
          value={text}
          className={styles.input}
          placeholder='Write here'
        />
      </form>
    </div>
  )
}

export default Search
