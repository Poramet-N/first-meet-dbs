use("sample_mflix");

// How many movies mentioned Cartoon in their plot?
db.movies.find({ plot: { $regex: "Cartoon", $options: "i" } }).count();

// How many movies does end plot (sentence) with the word Dinosaur.
db.movies.find({ plot: { $regex: "Dinosaur.$", $options: "i" } }).count();

// What does the data of above examples look like?
db.movies.findOne({ plot: { $regex: "Cartoon", $options: "i" } });
db.movies.findOne({ plot: { $regex: "Dinosaur.$", $options: "i" } });