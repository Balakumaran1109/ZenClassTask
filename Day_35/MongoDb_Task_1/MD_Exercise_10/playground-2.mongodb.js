/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

const database = "admin";
const collection = "NEW_COLLECTION_NAME";

// The current database to use.
use(database);

// Create a new collection.
db.createCollection(collection);

// The prototype form to create a collection:
/* db.createCollection( <name>,
  {
    capped: <boolean>,
    autoIndexId: <boolean>,
    size: <number>,
    max: <number>,
    storageEngine: <document>,
    validator: <document>,
    validationLevel: <string>,
    validationAction: <string>,
    indexOptionDefaults: <document>,
    viewOn: <string>,
    pipeline: <pipeline>,
    collation: <document>,
    writeConcern: <document>,
    timeseries: { // Added in MongoDB 5.0
      timeField: <string>, // required for time series collections
      metaField: <string>,
      granularity: <string>,
      bucketMaxSpanSeconds: <number>, // Added in MongoDB 6.3
      bucketRoundingSeconds: <number>, // Added in MongoDB 6.3
    },
    expireAfterSeconds: <number>,
    clusteredIndex: <document>, // Added in MongoDB 5.3
  }
)*/

// More information on the `createCollection` command can be found at:
// https://www.mongodb.com/docs/manual/reference/method/db.createCollection/

db.products
  .aggregate([
    {
      $group: {
        _id: "$product_price",
        total: { $sum: 1 },
        uniqueIds: { $push: "$_id" },
      },
    },
    {
      $match: {
        total: { $gt: 1 },
      },
    },
    {
      $project: {
        duplicateIds: { $slice: ["$uniqueIds", 1, { $size: "$uniqueIds" }] },
      },
    },
  ])
  .forEach(function (doc) {
    db.products.deleteOne({ _id: { $in: doc.duplicateIds } });
  });

db.products.find({});
