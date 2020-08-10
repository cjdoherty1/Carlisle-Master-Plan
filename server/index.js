const express = require('express');
const cors = require('cors');

const app = express();

//middleware
app.use(express.json());
app.use(cors());

const updates = require('./routes/api/updates');

app.use('/api/updates', updates);

//handle production
if(process.env.NODE_ENV === 'production') {
  //static folder
  app.use(express.static(__dirname + '/public/'));

  //handle SPA
  app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
