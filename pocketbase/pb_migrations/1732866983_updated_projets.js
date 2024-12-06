/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qpno4ezozuupl10")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zpjty1xw",
    "name": "logo",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [],
      "thumbs": [],
      "maxSelect": 1,
      "maxSize": 5242880,
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qpno4ezozuupl10")

  // remove
  collection.schema.removeField("zpjty1xw")

  return dao.saveCollection(collection)
})
