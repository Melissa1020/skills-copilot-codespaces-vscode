// Create new web server
const express = require('express');
const app = express();
// Create new web server
const cors = require('cors');
app.use(cors());
// Use JSON
app.use(express.json());
// Create new web server
const comments = [];
// Create new web server
app.post('/comments', function (req, res) {
  const comment = req.body;
  comments.push(comment);
  res.send('Comment added');
});
// Create new web server
app.get('/comments', function (req, res) {
  res.json(comments);
});
// Create new web server
app.listen(3001, function () {
  console.log('Server is listening on port 3001');
});
//