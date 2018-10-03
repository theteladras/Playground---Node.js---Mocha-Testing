const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

const port = process.env.PORT || 3000;

let app = express();

hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('currentYear', () => new Date().getFullYear());
hbs.registerHelper('inCaps', (text) => {
  return text.toUpperCase();
});
app.set('view engine', 'hbs');

app.use((req, res, next) => {
  let date = new Date().toString();
  let temp = `${date} ${req.method} ${req.url}`;
  console.log(temp);
  fs.appendFile('server.log', temp + '\n', (err) => {
    if (err) {
        console.log('Unabile to append to server.log');
    }
  });
  next();
});

// app.use((req, res, next) => {
//   res.render('maintenance.hbs');
// });

app.get('/', (req, res) => {
  res.render('home.hbs', {
    pageTitle: 'Home Page',
    welcomeMessage: 'Welcome to my Web.'
  });
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About Page',
  });
});

app.get('/projects', (req, res) => {
  res.render('projects.hbs', {
    pageTitle: 'Projects',
    randNum: Math.round(Math.random() * 100)
  });
});

app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Unabile to handle request.'
  });
});

app.listen(port, () => {
  console.log(`Server is runing and listening on port ${port}.`);
});
