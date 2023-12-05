
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://Group10DB:WeAreGroupTen10@group10cluster.df8uelv.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    const database = client.db('MoviesRating');
    const movies = database.collection('movies');

    const query = { title: 'Toy Story' };
    const movie = await movies.findOne(query);

    console.log(movie);

  } catch (error){
    console.error('Error:', error);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
