const express = require('express');
const cors = require('cors');

const app = express();

//middleware
app.use(express.json());
app.use(cors());

const updates = require('./routes/api/updates');
const housing_comments = require('./routes/api/housing_comments');
const contact_us = require('./routes/api/contact_us');

app.use('/api/updates', updates);
app.use('/api/housing_comments', housing_comments);
app.use('/api/contact_us', contact_us);

//handle production
if(process.env.NODE_ENV === 'production') {
  //static folder
  app.use(express.static(__dirname + '/public/'));

  //handle SPA
  app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
