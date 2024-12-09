# Node.js Server Port Already in Use Error

This repository demonstrates a common error in Node.js server development: the `EADDRINUSE` error, which occurs when the server attempts to bind to a port that is already in use.  The `bug.js` file shows the initial implementation that doesn't handle this error.  `bugSolution.js` provides a robust solution.

## Bug
The initial implementation in `bug.js` simply tries to start the server without checking for port availability, resulting in an error if the port is already in use.

## Solution
The solution in `bugSolution.js` includes error handling for the `EADDRINUSE` error.  It uses a loop that tries to start the server repeatedly, with a short delay in between attempts, until the port becomes available or a maximum number of retries is reached.