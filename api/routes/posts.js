const express = require('express'),
      router = express.Router(),
      mongoose = require('mongoose'),
      Post = require('../models/post');


router.get('/', (req, res, next) => {
    Post.find()
        .exec()
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => {
            res.status(500).json({
                err: err
            });
        })
});

router.post('/', (req, res, next) => {
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

router.delete('/:postId', (req, res, next) => {
    const id = req.params.postId;
    Post.remove({_id: id})
        .exec()
        .then(result => {
            res.status(200).json({
                message: 'post deleted',
            });
        })
        .catch(err => {
            res.status(500).json({
                err: err
            });
        })
});

module.exports = router;