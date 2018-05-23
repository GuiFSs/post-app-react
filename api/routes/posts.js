const express = require('express'),
      router = express.Router(),
      mongoose = require('mongoose'),
      Post = require('../models/post');


router.get('/', (req, res, next) => {
	const post = {
		title: 'eu sou titulo',
		body: 'eu sou o corpo'
	};
	res.status(200).json(post);
});

router.post('/', (req, res, next) => {
    // const post = {
    //     title: req.body.title,
    //     body: req.body.body,
    //     date: req.body.date
    // };
    const post = new Post({
        _id: new mongoose.Types.ObjectId(),
        title: req.body.title,
        body: req.body.body,
        date: req.body.date
    });

    post.save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                message: 'Post created',
                post
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({message: 'error with post', err});
        })

});

module.exports = router;