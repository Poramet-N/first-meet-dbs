use("sample_mflix");
// Fetch all documents from comments collection
db.theaters.find();
// Fetch only one user from comments collection by _id = ObjectId('59a47286cfa9a3a73e51e732')
db.theaters.findOne({_id: ObjectId('59a47286cfa9a3a73e51e732')});