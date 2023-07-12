const request = require('supertest');
const express = require('express');
const costRoutes = require('./cost'); 

const app = express();
app.use(express.json());
app.use('/cost', costRoutes);

describe('Cost Routes', () => {
  test('should create a new cost', async () => {
    const newCost = {
      description: 'Test cost',
      date_acquired: '2023-06-01',
      cost_amount: 20.5,
    };

    await request(app)
      .post('/cost')
      .send(newCost)
      .expect(200)
      .then((response) => {
        expect(response.body.description).toBe(newCost.description);
        expect(response.body.date_acquired).toBe(newCost.date_acquired);
        expect(response.body.cost_amount).toBe(newCost.cost_amount);
      });
  });

  
});
