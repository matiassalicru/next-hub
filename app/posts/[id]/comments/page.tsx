const fetchComments = async (id: string) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    next: { revalidate: 60 }
  }).then((res) => res.json())
}

export default async function ListOfComments ({
  params
}: {
  params: { id: string }
}) {
  const { id } = params
  const comments = await fetchComments(id)

  return (
    <ul style={{ fontSize: '12px', background: '#222', padding: '10px', listStyle: 'none' }}>
      {comments.map(
        ({
          id: commentId,
          name,
          body
        }: {
          id: number
          name: string
          body: string
        }) => (
          <li key={commentId}>
            <h2>{name}</h2>
            <p>{body}</p>
          </li>
        )
      )}
    </ul>
  )
}
