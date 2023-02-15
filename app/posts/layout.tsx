import React from 'react'
import styles from './layout.module.css'

const PostsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.container}>
      <small>Home › posts</small>
      {children}
    </div>
  )
}

export default PostsLayout
