const express = require('express');
const { MongoClient} = require('mongodb');
const app = express();
const port = 4000;
app.use(express.json());
require('dotenv').config();
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);
const multer = require('multer'); // Import Multer for handling file uploads
const storage = multer.memoryStorage(); // Store files in memory
const upload = multer({ storage });

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

// app.post('/addProduct',async(req,res)=>{
//   const productDetails = req.body;
//   try{
//     const addedProduct = await client.db('newDb').collection('posts').insertOne(productDetails);
//     res.status(200).json(addedProduct);
//   }catch(error){
//     res.status(500).json({error:"There was an error while adding a product"})
//   }
// })

app.post('/addProduct', upload.single('image'), async (req, res) => {
  try {
    const { title, category, subcategory, description, price, brand, size } = req.body;
    const imageFile = req.file; // Access the uploaded image file

    // Process the image file here, you can save it to a server directory or a cloud storage service

    const store = {
      title,
      category,
      subcategory,
      description,
      price,
      brand,
      size,
      imageUrl: 'path/to/your/image' // Update this with the actual URL of the saved image
    };

    const addedProduct = await client.db('newDb').collection('products').insertOne(store);
    res.status(200).json(addedProduct);
  } catch (error) {
    res.status(500).json({ error: "The insertion has failed" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
