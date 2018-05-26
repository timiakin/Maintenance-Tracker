const express = require('express');

const app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.get('/', (req, res) => {
  res.send('Welcome To Our APP!');
});

const requests = [
  { id: 0,title: 'Bad Engine', date: '12/12/2015', status: 'approved'},
    { id: 1, title: 'Broken mirror', date: '1/12/2016', status: 'pending'}, 
    { id: 2, title: 'Fix my tyres', date: '10/11/2017', status: 'disapproved' }];


app.get('/api/v1/users/requests', (req, res) => { // Fetching all requests
  res.send(requests);
});

app.get('/api/v1/users/requests/:id', (req, res) => { // Fetching a particular request
  console.log(req.params.id);
  const newi = [];
  for (let x = 0; x < requests.length; x += 1) {
    newi.push(Number(requests[x].id));
  }
  if (newi.includes(Number(req.params.id))) {
    console.log(req.params);
    const number = req.params.id;
    res.send(`${requests[number].title} ,this is request number:  ${number}`);
  } else {
    res.send('this request doesnot exist');
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
  } else if (req.body.title && req.body.id && req.body.date && req.body.status) {
    requests.push({ id: Number(req.body.id), title: req.body.title, date: req.body.date , status: req.body.status});
    console.log(req.body.title);
    console.log(req.body.date);
    res.send(requests);
  } else {
    res.send('wrong data input');
  }
});


app.put('/api/v1/users/requests/:id', (req, res) => { // Modifying  a request
  const newi = [];
  for (let x = 0; x < requests.length; x += 1) {
    newi.push(Number(requests[x].id));
  }
  if (newi.includes(Number(req.params.id))) {
  const number = req.params.id;
  requests[number].title = req.body.title;
  requests[number].date = req.body.date;
  requests[number].status = req.body.status;
  console.log(req.params.id);
  console.log(req.body.title);
  res.send(requests);
  }
  else{
    res.send('sorry, that id doesnot exist in our database');
  }
});

app.delete('/api/v1/users/requests/delete/:id', (req, res) => { // Modifying  a request
  const newi = [];
  for (let x = 0; x < requests.length; x += 1) {
    newi.push(Number(requests[x].id));
  }
  if (newi.includes(Number(req.params.id))) {
  const number = req.params.id;
  requests.splice(number, 1);
  console.log(req.params.id);
  res.send(requests);
  }
  else{
    res.send('sorry, you cannot delete id no. ' + req.params.id + ' because that id doesnot exist in our database');
  }

});


module.exports = app;