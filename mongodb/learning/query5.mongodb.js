use("sample_mflix");

// What are top 10 runtime movies?
db.movies.find({}).sort({ runtime: -1 }).limit(10);

// What are top 3 runtime movies that less than 75 minutes?
db.movies.find({ runtime: { $lt: 75 } }).sort({ runtime: -1 }).limit(3);

// I was born in 1992, which 3 movies should I watch in next 5 years?
db.movies.find({ year: { $gte: 1992, $lt: 1997 } }).sort({ year: 1 }).limit(3);

// How many movies were released during 2000 - 2010?
db.movies.find({ released: { $gte: ISODate('2000-01-01T00:00:00.000Z'), $lt: ISODate('2010-01-01T00:00:00.000Z') } }).count();