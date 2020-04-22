const express = require ('express')
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express()
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() =>{
  console.log("Connected succesfully")
})
.catch((err)=>{
  console.log('Error', err)
})

const connection = mongoose.connection;
connection.once("open", () => 
  console.log("MongoDB connection established succefully")
)

const articlesRouter = require('./routes/articles')
app.use('/articles', articlesRouter);

app.listen(port, () => console.log (`The App is running on port: ${port}`));