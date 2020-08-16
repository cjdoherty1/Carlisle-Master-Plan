const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

//get contacts
router.get('/', async (req, res) => {
  const Contact = await loadContactCollection();
  res.send(await Contact.find({}).toArray());
  //res.send("here");
})

//add contacts
router.post('/', async (req, res) => {
  const Contact = await loadContactCollection();
  await Contact.insertOne({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    comment: req.body.comment,
    createdAt: new Date()
  });
  res.status(201).send();
})

//delete contacts
router.delete('/:id', async (req, res) => {
  const Contact = await loadContactCollection();
  await Contact.deleteOne({
    _id: new mongodb.ObjectID(req.params.id)
  });
  res.status(200).send();
});

async function loadContactCollection() {
  const client = await mongodb.MongoClient.connect
    ('mongodb+srv://cjdoherty:Il2ef00d!@carlisle-master-plan.d0xqs.mongodb.net/site_data?retryWrites=true&w=majority', {
      useUnifiedTopology: true
    });
  //console.log("here");
  return client.db('site_data').collection('contact_us');
}

module.exports = router;