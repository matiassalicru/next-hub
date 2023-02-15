// import PocketBase from 'pocketbase'

// TODO: WIP keep working
// const pb = new PocketBase('http://127.0.0.1:8090')

// const getDbResults = async () => {
//   return await pb.collection('notes').getList(1, 20)
// }

const NotesPage = async () => {
  // const { items } = await getDbResults()

  return (
    <div>
      {/* {items.map(({ id, title, body }) => (
        <div key={id}>
          <h1>{title}</h1>
          <p>{body}</p>
        </div>
      ))} */}
    </div>
  )
}

export default NotesPage
