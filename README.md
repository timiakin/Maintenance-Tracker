[![Build Status](https://travis-ci.org/timiakin/maintenance-tracker.svg?branch=feature)](https://travis-ci.org/timiakin/maintenance-tracker)

<a href="https://codeclimate.com/github/timiakin/maintenance-tracker/maintainability"><img src="https://api.codeclimate.com/v1/badges/fe945bc2b2a7b3f99d92/maintainability" /></a>

[![Coverage Status](https://coveralls.io/repos/github/timiakin/maintenance-tracker/badge.svg?branch=feature)](https://coveralls.io/github/timiakin/maintenance-tracker?branch=feature)



**SYNOPSIS**

Maintenance Tracker App is an application that provides users with the ability to reach out to operations or repairs department regarding repair or maintenance requests and monitor the status of their request. This project was done so as to build a fully functional maintenance tracker app. 

**CODE EXAMPLE**

Here is a simple API that displays all the request of an already signed in user 

const requests = [{ id: 0, title: 'Bad Engine' }, { id: 1, title: 'Broken mirror' }, { id: 2, title: 'Fix my tyres' }];

app.get('/api/v1/users/requests', (req, res) => { // Fetching all requests
 
 res.send(requests);

});

**MOTIVATION**
The aim of this project was to create an app to deal with requests. The main reason was to learn and develop myself as a software deeloper.

**Built with**

Here is a list of resources you need to create this app.

Node.js, Express, Editor of your choice (VScode was used), Eslint, Babel, Mocha, airbnb, HTML, CSS



**Tests**

Find an example of the tests ran below

describe('GET/ requests', () => {
  
  it('should GET all the requests', (done) => {
  
  chai.request(app)
  
  .get('/api/v1/users/requests')
  
  .end((err, res) => {
  
  res.should.have.status(200);
  
  res.body.should.be.a('array');
  
  res.body.length.should.be.eql(3);
  
  done();
  
  });
  
  });

});

**Contributors**

Timi Akinrimisi

**License**


