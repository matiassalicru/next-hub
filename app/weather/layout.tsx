import Link from 'next/link'
import React from 'react'
import styles from './layout.module.css'

const PostsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.container}>
      <small>Home › <Link href={'/weather'}>Weather</Link></small>
      {children}
    </div>
  )
}

export default PostsLayout
