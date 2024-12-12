/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qpno4ezozuupl10")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1hz3iery",
    "name": "lien",
    "type": "url",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qpno4ezozuupl10")

  // remove
  collection.schema.removeField("1hz3iery")

  return dao.saveCollection(collection)
})
