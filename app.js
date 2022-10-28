const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'));

app.get('/homepage', (req, res) => {
  if (req.url === '/homepage') {
    res.write('Hello, welcome to the home page');
    res.end();
  } else {
    res.statusCode = 404;
    res.write('404 Page');
    res.end();
  }
})
app.get('/about', (req, res) => {
  if (req.url === '/about') {
    res.write('Hello, welcome to the about page');
    res.end();
  } else {
    res.statusCode = 404;
    res.write('404 Page');
    res.end();
  }
})
app.get('/works', (req, res) => {
  if (req.url === '/works') {
    res.write('Hello, welcome to works');
    res.end();
  } else {
    res.statusCode = 404;
    res.write('404 Page');
    res.end();
  }
})
app.get('/gallery', (req, res) => {
  response.send(`
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Pug</title>
        <link rel="stylesheet" href="/stylesheets/style.css" />
      </head>
      <body>
        <h1>Cat</h1>
        <p>This is my second route</p>
        <img src="/images/jc-gellidon-TPZNooS1Meg-unsplash.jpg" />
        <img src="/images/mink-mingle-8qiBIM2YA3s-unsplash.jpg" />
        <img src="/images/pinho-FZAyQs9V2XI-unsplash.jpg" />
        <img src="/images/cool-cat.jpg" />
      </body>
    </html>
  `);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})