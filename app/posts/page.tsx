import Link from 'next/link'
import { LikeButton } from './LikeButton'

const fetchPosts = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts', { next: { revalidate: 3 } })
    .then(res => res.json())
}
export default async function ListOfPosts () {
  const posts = await fetchPosts()

  return posts.slice(0, 5).map(({ id, title, body }: { id: string, title: string, body: string}) => (
    <article key={id}>
      <Link href={`/posts/${id}`}>
        <h1 style={{ color: '#09f' }}>{title}</h1>
        <p>{body}</p>
        <LikeButton />
      </Link>
    </article>
  ))
}
