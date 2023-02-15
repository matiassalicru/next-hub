import React from 'react'
import CommentsButton from './components/CommentsButton'

const fetchSinglePosts = (id: string) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { next: { revalidate: 10 } })
    .then(res => res.json())
}
export default async function ListOfPosts ({ children, params }: { children: React.ReactNode, params: { id: string }}) {
  const post = await fetchSinglePosts(params.id)

  return (
    <article key={post.id}>
      <h1 style={{ color: '#09f' }}>{post.title}</h1>
      <p>{post.body}</p>
      <CommentsButton id={params.id}/>
      {children}
    </article>
  )
}
