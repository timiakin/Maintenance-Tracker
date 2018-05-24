

const express = require('express');

const bodyparser = require('body-parser');

const app = express();


app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

const requests = [{ id: 0, title: 'Bad Engine' }, { id: 1, title: 'Broken mirror' }, { id: 2, title: 'Fix my tyres' }];


app.get('/api/v1/users/requests', (req, res) => { // Fetching all requests
  res.send(requests);
});

app.get('/api/v1/users/requests/:ID', (req, res) => { // Fetching a particular request
  if (req.params.ID) {
    console.log(req.params);
    const number = req.params.ID;
    res.send(`${requests[number].title} ,this is request number:  ${number}`);
  } else {
    res.send('error');
  }
});

app.post('/api/v1/users/requests', (req, res) => { // Adding a request
  console.log(req.body.id);
  const newi = [];
  for (let x = 0; x < requests.length; x += 1) {
    newi.push(Number(requests[x].id));
  }
  console.log(newi);
  if (newi.includes(Number(req.body.id))) {
    res.send('Cannot create new request with the same ID');
  } else {
    // console.log(item.id);
    requests.push({ id: req.body.id, title: req.body.title });
    console.log(req.body.title);
    res.send(requests);
  }
});


app.put('/api/v1/users/requests/:ID', (req, res) => { // Modifying  a request
  const number = req.params.ID;
  requests[number].title = req.body.title;
  console.log(req.params.ID);
  console.log(req.body.title);
  res.send(requests);
});

app.delete('/api/v1/users/requests/delete/:userID', (req, res) => { // Modifying  a request
  const number = req.params.userID;
  requests.splice(number, 1);
  console.log(req.params.userID);
  console.log(req.body.title);
  res.send(requests);
});

const port = 8000;

app.listen(port, () => { // starting the server
  console.log(`We are live on ${port}`);
});

module.exports = app;
