# Express.js Async Error Handling Bug

This repository demonstrates a common error in Node.js Express.js applications where a response is sent before an asynchronous operation completes, potentially leading to incomplete or missing error responses.  The bug arises when an asynchronous operation within a route handler throws an error *after* the initial response has been sent. This can result in unexpected behavior and a poor user experience.

## Bug Description
The `bug.js` file contains an Express.js route that performs an asynchronous operation.  However, it sends a preliminary response ('Hello') before waiting for the asynchronous operation to complete. If the asynchronous operation throws an error, the error handling (`catch` block) executes, but the client has already received the preliminary response.  This might lead to confusion if the error represents a critical issue.

## Solution
The `bugSolution.js` file provides a solution by ensuring that the response is only sent after the asynchronous operation has completed, either successfully or with an error.

## How to Reproduce the Bug
1. Clone this repository.
2. Navigate to the repository directory.
3. Run `npm install` to install Express.js.
4. Run `node bug.js`.
5. Send a request to `/` (e.g., using `curl` or a browser).
6. Observe that despite the async function rejecting with an error, the server still returns 'Hello'.

## How to Run the Solution
1. Run `node bugSolution.js`.
2. Send a request to `/`.
3. Observe that the error is now properly handled and returned in the response.