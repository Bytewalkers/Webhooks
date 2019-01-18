const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;

const app = express();

app.get('/', (req, res) => res.json({
  welcome: 'home',
}));

app.post('/github-pull', (req, res) => {
  const { params, body, query } = req;
  console.log('params:', params);
  console.log('body:', body);
  console.log('query:', query);

  res.json({ done: 'yes' });
})

// dummy commit
// dummy commit 2
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
