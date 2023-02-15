migrate((db) => {
  const collection = new Collection({
    "id": "4k785dmafennuy9",
    "created": "2023-02-15 13:30:23.136Z",
    "updated": "2023-02-15 13:30:23.136Z",
    "name": "posts",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ihfxhhao",
        "name": "body",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": 1,
          "max": 240,
          "pattern": ""
        }
      },
      {
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
      },
      {
        "system": false,
        "id": "wfjjjdpg",
        "name": "user",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": true,
          "maxSelect": 1,
          "displayFields": [
            "username",
            "email",
            "name",
            "avatar"
          ]
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("4k785dmafennuy9");

  return dao.deleteCollection(collection);
})
