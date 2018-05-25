// const http = require('http');
const app = require('./app');


const port = process.env.PORT || 8000;

// const server = http.createServer(app);

// server.listen(port);

// const port = 8000;

app.listen(port, () => { // starting the server
  console.log(`We are live on ${port}`);
});

