const express = require('express');

const app = express();

const db = [
  { id: 1, author: 'John Doe', text: 'This company is worth every coin!' },
  {
    id: 2,
    author: 'Amanda Doe',
    text: 'They really know how to make you happy.',
  },
];

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/testimonials', (req, res) => {
  res.json(db);
});

app.get('/testimonials/:id', (req, res) => {
  res.json(db.find((t) => t.id === req.params.id));
});

app.listen(8000, () => {
  console.log('Server is running on port: 8000');
});
