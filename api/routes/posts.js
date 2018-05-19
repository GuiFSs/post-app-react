const express = require('express'),
      router = express.Router();


router.get('/', (req, res, next) => {
	const post = {
		title: 'eu sou titulo',
		body: 'eu sou o corpo'
	};
	res.status(200).json(post);
});

router.post('/', (req, res, next) => {
    const post = {
        title: req.body.title,
        body: req.body.body,
        date: req.body.date
    };
    res.status(201).json({
        message: 'Post created',
        post
    });
});

module.exports = router;