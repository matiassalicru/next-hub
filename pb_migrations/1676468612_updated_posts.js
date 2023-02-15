migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4k785dmafennuy9")

  collection.name = "notes"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4k785dmafennuy9")

  collection.name = "posts"

  return dao.saveCollection(collection)
})
