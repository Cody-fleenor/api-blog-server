var express = require('express');
var logger = require('morgan');
var cors =require('cors');
var bodyParser = require('body-parser');

const mongoose = require('mongoose');
const MONGO_USER = process.env.MONGO_USER;
const MONGO_KEY = process.env.MONGO_KEY;

const MongoClient = require('mongodb').MongoClient;

//comment
const PORT = process.env.PORT || 3000;
const CONNECTION_URL = `mongodb+srv://${MONGO_USER}:${MONGO_KEY}@cluster0.tzwbm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

mongoose.connect(CONNECTION_URL,{useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log('Server Running on Port:',{PORT})))
    .catch((error) => console.log(error.message));
mongoose.set('useFindAndModify', false);





var postsRouter = require('./routes/posts');
var commentsRouter = require('./routes/comments');
var app = express();


app.use(logger('dev'));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(cors());

app.get('/', (req,res) => res.send('Hello World'));
app.use('/posts', postsRouter);
app.use('/comments', commentsRouter);

module.exports = app;