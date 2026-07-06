use("sample_mflix");
// How many theaters does CA state has?
db.theaters.find({"location.address.state": "CA"}).count();
// How many theaters does California city has?
db.theaters.find({"location.address.city": "California"}).count();
// What is an example of each documents of above like?
db.theaters.findOne({"location.address.state": "CA"});
db.theaters.findOne({"location.address.city": "California"});