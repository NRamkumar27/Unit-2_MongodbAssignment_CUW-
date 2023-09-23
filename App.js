const express = require('express'); //To connect with api we are using express.
const app = express();
const { MongoClient } = require('mongodb');
const url = 'mongodb://127.0.0.1:27017'; //Mongoserverurl
const dbName = 'Unit-2'; // database name
const client = new MongoClient(url);

// List of players in the volley ball
app.get('/', async (req, res) => {
  try {
    let result=await client.connect();
    let db=result.db(dbName);
    let collection=db.collection('Volley_ball')
    const response = await collection.find({}).toArray();
    res.json(response);
    console.log(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

//Player with the Most Attacks
app.get('/attacks', async(req, res) => {
  try {
    const result = await client.connect();
    const db = result.db(dbName);
    const collection = db.collection('Volley_ball');
    const response = await collection.find().sort({ "attacks": -1 }).limit(1).toArray();
    res.json(response);
    console.log(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Player with the Most Blocks
app.get('/blocks', async(req, res) => {
  try {
    const result = await client.connect();
    const db = result.db(dbName);
    const collection = db.collection('Volley_ball');
    const response = await collection.find().sort({ "blocks": -1 }).limit(1).toArray();
    res.json(response);
    console.log(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

//Player with the least blocks
app.get('/leastblocks', async(req, res) => {
  try {
    const result = await client.connect();
    const db = result.db(dbName);
    const collection = db.collection('Volley_ball');
    const response = await collection.find().sort({ "blocks": 1 }).limit(1).toArray();
    res.json(response);
    console.log(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
//List of Players Sorted by Most to Fewest Aces
app.get('/aces', async(req, res) => {
  try {
    const result = await client.connect();
    const db = result.db(dbName);
    const collection = db.collection('Volley_ball');
    const response = await collection.find().sort({ "aces": -1 }).toArray();
    res.json(response);
    console.log(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

//Players with the Most Number of Digs
app.get('/digss', async(req, res) => {
  try {
    const result = await client.connect();
    const db = result.db(dbName);
    const collection = db.collection('Volley_ball');
    const response = await collection.find().sort({ "digs": -1 }).toArray();
    res.json(response);
    console.log(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the Express server
const PORT = process.env.PORT || 3001; 
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);// It will printout the data in the console.
});

