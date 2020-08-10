const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

//get updates
router.get('/', async (req, res) => {
  const updates = await loadUpdatesCollection();
  res.send(await updates.find({}).toArray());
  //res.send("here");
})

//add updates
router.post('/', async (req, res) => {
  const updates = await loadUpdatesCollection();
  await updates.insertOne({
    author: req.body.author,
    title: req.body.title,
    text: req.body.text,
    createdAt: new Date()
  });
  res.status(201).send();
})

//delete updates
router.delete('/:id', async (req, res) => {
  const updates = await loadUpdatesCollection();
  await updates.deleteOne({
    _id: new mongodb.ObjectID(req.params.id)
  });
  res.status(200).send();
});

async function loadUpdatesCollection() {
  const client = await mongodb.MongoClient.connect
  ('mongodb+srv://cjdoherty:Il2ef00d!@carlisle-master-plan.d0xqs.mongodb.net/site_data?retryWrites=true&w=majority', {
    useUnifiedTopology: true
  });
  //console.log("here");
  return client.db('site_data').collection('updates');
}

module.exports = router;