const http = require('http');
const assert = require('assert');

// Function to test the server
function testServer() {
  return new Promise((resolve, reject) => {
    http.get('http://127.0.0.1:3000', (res) => {
      let data = '';

      // Append data as it comes in
      res.on('data', (chunk) => {
        data += chunk;
      });

      // Resolve promise when response ends
      res.on('end', () => {
        resolve(data);
      });
    }).on('error', (err) => reject(err));
  });
}

// Test case
async function runTests() {
  process.stdout.write('Running tests...\n');

  try {
    const data = await testServer();
    assert.strictEqual(data, 'Hello, welcome to the server!', 'Greeting message does not match');
    console.log('Test passed: Correct greeting message received.');
  } catch (error) {
    console.error('Test failed:', error.message);
  }
}

// Start test
runTests();
