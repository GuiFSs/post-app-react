const express = require('express'),
	  app = express(),
	  morgan = require('morgan'),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose');

const posts = require('./api/routes/posts');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/microposts');

mongoose.Promise = global.Promise;

const port = process.env.PORT || 5000;

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // CORS handling, * means every site can access my API
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-with, Content-type, Accept, Authorization');
    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});

app.use('/api/posts', posts);


app.listen(port, () => console.log(`Listening on port ${port}`));
