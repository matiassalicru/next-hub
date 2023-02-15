migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4k785dmafennuy9")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wp4ix4rz",
    "name": "title",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": 2,
      "max": 48,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4k785dmafennuy9")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wp4ix4rz",
    "name": "title",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": 2,
      "max": 16,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
