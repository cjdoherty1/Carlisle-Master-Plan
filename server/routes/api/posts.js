// const express = require('express');
// const mongodb = require('mongodb');

// const router = express.Router();

// //get posts
// router.get('/', async (req, res) => {
//   const posts = await loadPostsCollection();
//   res.send(await posts.find({}).toArray());
//   //res.send("here");
// })

// //add posts
// router.post('/', async (req, res) => {
//   const posts = await loadPostsCollection();
//   await posts.insertOne({
//     text: req.body.text,
//     createdAt: new Date()
//   });
//   res.status(201).send();
// })

// //delete posts
// router.delete('/:id', async (req, res) => {
//   const posts = await loadPostsCollection();
//   await posts.deleteOne({
//     _id: new mongodb.ObjectID(req.params.id)
//   });
//   res.status(200).send();
// });

// async function loadPostsCollection() {
//   const client = await mongodb.MongoClient.connect
//   ('mongodb+srv://cjdoherty:Il2ef00d!@carlisle-master-plan.d0xqs.mongodb.net/posts?retryWrites=true&w=majority', {
//     useUnifiedTopology: true
//   });
//   //console.log("here");
//   return client.db('posts').collection('posts');
// }

// module.exports = router;