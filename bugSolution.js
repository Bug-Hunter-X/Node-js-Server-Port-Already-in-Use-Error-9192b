const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

const port = 8080;
const maxRetries = 10;
let retries = 0;

function startServer() {
  server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  }).on('error', (err) => {
    if (err.code === 'EADDRINUSE' && retries < maxRetries) {
      retries++;
      console.log(`Port ${port} is in use. Retrying in 1 second... (Attempt ${retries}/${maxRetries})`)
      setTimeout(startServer, 1000);
    } else {
      console.error(`Failed to start server: ${err}`);
    }
  });
}

startServer();