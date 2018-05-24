Synopsis

Maintenance Tracker App is an application that provides users with the ability to reach out to operations or repairs department regarding repair or maintenance requests and monitor the status of their request. This project was done so as to build a fully functional maintenance tracker app. 

Code Example

Here is a simple API that displays all the request of an already signed in user 

const requests = [{ id: 0, title: 'Bad Engine' }, { id: 1, title: 'Broken mirror' }, { id: 2, title: 'Fix my tyres' }];
app.get('/api/v1/users/requests', (req, res) => { // Fetching all requests
  res.send(requests);
});

Motivation

Built with

Here is a list of resources you need to create this app.
Node.js, Express, Editor of your choice (VScode was used), Eslint, Babel, Mocha, airbnb

API Reference

Tests

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

Contributors

Timi Akinrimisi

License


