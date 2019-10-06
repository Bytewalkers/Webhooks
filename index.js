const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => res.json({
  welcome: 'home',
}));

app.post('/github-pull', (req, res) => {
  const { params, body, query } = req;
  console.log('params:', params);
  console.log('body:', body);
  console.log('query:', query);
  console.log('req.headers.host ', req.headers.host);

  res.json({ done: 'yes' });
})

// dummy commit
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
