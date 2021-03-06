const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

//get HComments
router.get('/', async (req, res) => {
  const HComments = await loadHCommentsCollection();
  res.send(await HComments.find({}).toArray());
  //res.send("here");
})

//add HComments
router.post('/', async (req, res) => {
  const HComments = await loadHCommentsCollection();
  await HComments.insertOne({
    author: req.body.author,
    promt: req.body.promt,
    text: req.body.text,
    createdAt: new Date()
  });
  res.status(201).send();
})

//delete HComments
router.delete('/:id', async (req, res) => {
  const HComments = await loadHCommentsCollection();
  await HComments.deleteOne({
    _id: new mongodb.ObjectID(req.params.id)
  });
  res.status(200).send();
});

async function loadHCommentsCollection() {
  const client = await mongodb.MongoClient.connect
  ('mongodb+srv://cjdoherty:Il2ef00d!@carlisle-master-plan.d0xqs.mongodb.net/site_data?retryWrites=true&w=majority', {
    useUnifiedTopology: true
  });
  //console.log("here");
  return client.db('site_data').collection('housing_comments');
}

module.exports = router;