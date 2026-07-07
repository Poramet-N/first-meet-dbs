use("sample_mflix");
// What is an example of  type “movie” and genres "Drama" look like?
db.movies.findOne({ type: "movie", genres: "Drama" });
// How many movies are there in “movie” type and “Drama” genre?
db.movies.find({ type: "movie", genres: "Drama" }).count();