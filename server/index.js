const express = require("express");
const app = express();
const cors = require("cors");
const {MongoClient} = require("mongodb")
app.use(cors());
app.use(express.json());

async function main(){
  const uri = "mongodb+srv://Usman:Usman123@cluster0.sqnqw3z.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri);
  try {
      // Connect to the MongoDB cluster
      await client.connect();
      console.log("Connected")
      // Make the appropriate DB calls
      // await  listDatabases(client);
  } catch (e) {
      console.error(e);
  } finally {
      await client.close();
  }
}

main().catch(console.error);

//Listening to port
app.listen(5000, () => {
  console.log("Connected to Backend!");
});