const assert = require('assert');
const http = require('http');

const server = require('../server');

describe('GET /greet', () => {
  it('should return Hello, World!', (done) => {
    http.get('http://127.0.0.1:3000/greet', (res) => {
      assert.strictEqual(res.statusCode, 200);

      let data = '';
      res.on('data', chunk => {
        data += chunk;
      });

      res.on('end', () => {
        assert.strictEqual(data, 'Hello, World!');
        done();
      });
    });
  });

  it('should return 404 for non-existing routes', (done) => {
    http.get('http://127.0.0.1:3000/nonexistent', (res) => {
      assert.strictEqual(res.statusCode, 404);
      done();
    });
  });
});
