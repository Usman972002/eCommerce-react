const express = require('express');
const { MongoClient} = require('mongodb');
const app = express();
const port = 4000;
app.use(express.json());
require('dotenv').config();

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

async function connectToDatabase() {
  try {
    await client.connect();
    console.log("Connected to the database");
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
}

connectToDatabase();

// Define routes here
app.get('/posts',async(req,res)=>{
  try{
    const posts = await client.db('newDb').collection('posts').find({}).toArray();
    res.status(200).json(posts);
  }catch(error){
    res.status(500).json({error:"Error Fetching Data"});
  }
})

app.post('/addPost',async(req,res)=>{
  const store = req.body
  try{
    const addedpost = await client.db('newDb').collection('posts').insertOne(store);
    res.status(200).json(addedpost);
  }catch(error){
    res.status(500).json({error:"The insrtion has been failed"});
  }
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
