/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qpno4ezozuupl10")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tymrhnb4",
    "name": "description2",
    "type": "editor",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "convertUrls": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pfna5bvx",
    "name": "description3",
    "type": "editor",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "convertUrls": false
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wzxus4jh",
    "name": "description1",
    "type": "editor",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "convertUrls": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qpno4ezozuupl10")

  // remove
  collection.schema.removeField("tymrhnb4")

  // remove
  collection.schema.removeField("pfna5bvx")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wzxus4jh",
    "name": "description",
    "type": "editor",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "convertUrls": false
    }
  }))

  return dao.saveCollection(collection)
})
