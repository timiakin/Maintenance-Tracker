const chai = require('chai');
const chaihttp = require('chai-http');
// const app = require('../server');

const app = require('../app.js');

const should = chai.should();


// import chaihttp from 'chai-http';
// import chai from 'chai';
// import app from '../app';

// process.env.NODE_ENV = 'test';


chai.use(chaihttp);

// Testing the "GET all requests route"

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

// Testing the "POST/CREATE a new request route"

describe('/POST request', () => {
  it('should POST a request', (done) => {
    const reqs = {
      id: 4,
      title: 'Fix Bad Tyres',date: '1/12/2016',
       status: 'pending'
    };
    chai.request(app)
      .post('/api/v1/users/requests')
      .send(reqs)
      .end((err, res) => {
        res.should.have.status(200);
        should.exist(res.body);
        console.log('res', res.body);
        res.body.should.be.a('array');
        reqs.should.be.a('object');
        reqs.should.have.property('id');
        reqs.should.have.property('title');
        res.body.length.should.be.eql(4);
        done();
      });
  });
});

// Testing the "GET a single request Route"

describe('/GET/:id request', () => {
  it(' should GET a request by the given id', (done) => {
    chai.request(app)
      .get('/api/v1/users/requests/1')
      .end((err, res) => {
        res.should.have.status(200);
        console.log('res', res.body); // empty
        should.exist(res.body);
        // res.body.length.should.be.eql(1);
        done();
      });
  });
});

// Testing the "DELETE ROUTE"

describe('/DELETE/:idrequest', () => {
  it(' should DELETE a request by the given id', (done) => {
    chai.request(app)
      .delete('/api/v1/users/requests/delete/2')
      .end((err, res) => {
        res.should.have.status(200);
        console.log('res', res.body);
        should.exist(res.body);
        res.body.length.should.be.eql(3);
        done();
      });
  });
});

describe('/PUT/:id', () => {
  it('it should UPDATE a request based on the id', (done) => {
    const reqs = ({ id: 1, title: 'spoilt bonnet',date: '1/12/2016', status: 'pending' }); // update a reqs.
    chai.request(app)
      .put('/api/v1/users/requests/1')
      .send(reqs) // if you send the updated request, the following below will happen
      .end((err, res) => {
        res.should.have.status(200);
        reqs.should.be.a('object');
        reqs.should.have.property('title').eql('spoilt bonnet');
        reqs.should.have.property('date').eql('1/12/2016');
        reqs.should.have.property('status').eql('pending');
        console.log(res.body);
        done();
      });
  });
});

// describe('/GET/:id request', () => {
//   it(' should GET a request by the given id', (done) => {
//     // const requests = { id: '1', title: 'J.R.R. Tolkien' };
//     //      request.save((err, book) => {
//     chai.request(app)
//       // .get(`/api/v1/users/requests/$${requests.id}`)
//       .get('/api/v1/users/requests/:ID')
//       // .send(requests)
//       .end((err, res) => {
//         res.should.have.status(200);
//         // res.body.should.be.a('array');
//         // equests[req.params.id].title.should.have.property('title');
//         //        res.body.should.have.property('_id').eql(req.id);
//         res.body.length.should.be.eql(1);
//         done();
//       });
//   });
// });
