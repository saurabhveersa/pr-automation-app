const request = require('supertest');
const express = require('express');
const app = require('../server');

 describe('GET /', () => {
  it('should return Hello, World! message', async () => {
    const response = await request(app).get('/');
    response.expect(200);
    response.expect('Content-Type', /text/);
    response.expect((res) => {
      if (!res.text.includes('Hello, World! Welcome to the server.')) throw new Error('Missing greeting message');
    });
  });
});