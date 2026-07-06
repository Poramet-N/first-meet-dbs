use("sample_mflix");
// Fetch only one user from comments collection by email = "emilia_clarke@gameofthron.es"
db.users.findOne({email: "emilia_clarke@gameofthron.es"});
// Fetch only one user from comments collection by name = "Robert Baratheon"
db.users.findOne({name: "Robert Baratheon"});