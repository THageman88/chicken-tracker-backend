const request = require('supertest');
const express = require('express');
const flockRoutes = require('./flock'); 
const app = express();
app.use(express.json());
app.use('/flock', flockRoutes);

describe('Flock Routes', () => {
  test('should create a new flock', async () => {
    const newFlock = {
      chx_name: 'Test chicken',
      hen_or_rooster: true,
      age: 2,
      date_acquired: '2023-06-01',
      comments: 'This is a test',
    };

    await request(app)
      .post('/flock')
      .send(newFlock)
      .expect(200)
      .then((response) => {
        expect(response.body.chx_name).toBe(newFlock.chx_name);
        expect(response.body.hen_or_rooster).toBe(newFlock.hen_or_rooster);
        expect(response.body.age).toBe(newFlock.age);
        expect(response.body.date_acquired).toBe(newFlock.date_acquired);
        expect(response.body.comments).toBe(newFlock.comments);
      });
  });
});
