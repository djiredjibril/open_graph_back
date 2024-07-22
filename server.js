// backend/server.js
const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 3003;

app.use(cors());
app.use('/public', express.static(path.join(__dirname, 'public')));

const metadataStore = {
  '/page1': {
    title: 'Anniversaire de John',
    description: 'Rejoignez-nous pour célébrer l’anniversaire de John !',
    image: 'http://localhost:3003/public/images/1.jpg',
    url: 'http://localhost:3000/page1',
  },
  '/page2': {
    title: 'Anniversaire de Jane',
    description: 'Célébrons ensemble l’anniversaire de Jane !',
    image: 'http://localhost:3003/public/images/2.jpg',
    url: 'http://localhost:3000/page2',
  },
};

app.get('/metadata', (req, res) => {
  const url = req.query.url;
  const metadata = metadataStore[url] || {
    title: 'Titre par défaut',
    description: 'Description par défaut',
    image: 'http://localhost:3003/public/images/default.jpg',
    url: 'http://localhost:3000',
  };

  res.json(metadata);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
