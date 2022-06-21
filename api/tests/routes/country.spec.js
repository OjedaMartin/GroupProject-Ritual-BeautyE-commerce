/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Country, conn } = require('../../src/db.js');

const agent = session(app);
const country = {
  name: 'Argentina',
};

describe('Country routes', () => {
  
  describe('GET /countries', () => {
    it('should get 200', (done) => agent.get('/countries').expect(200));

    it('deberia  devolver todos los componentes', async()=>{
      const countries = await agent.get('/countries')
      .expect(countries.body.length).toEqual(250)
    })
  });
});
