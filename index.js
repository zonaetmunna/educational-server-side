const express = require("express");
const cors = require('cors');
const app = express();
require('dotenv').config();
const { MongoClient } = require('mongodb');


const port = process.env.PORT || 5000;
// middleware 
app.use(cors());
app.use(express.json());

// database
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.fuuny.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
     try {
          await client.connect();
          const database = client.db('educational');
          const coursesCollection = database.collection('courses')

     }
     finally {
          // await client.close();
     }

}
run().catch(console.dir);


app.get('/', (req, res) => {
     res.send('hi everyone');
});
app.listen(port, () => {
     console.log('listing the port', port);
})