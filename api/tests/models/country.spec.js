const { Country, Activity, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Country model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Country.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Country.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Country.create({ name: 'Argentina' });
      });
    });
  });
});

describe('Info', () => {
  it('should throw an error if difficulty is not a number', (done) =>{
    Activity.create({name: 'sky', difficulty: "hola", season: "Winter", country: "Argentina"})
      .then(() => done(new Error ('Difficulty should be a number')))
      .catch(() => done())
  })
  
  it('should throw an error if season is not a string', (done) =>{
    Activity.create({name: 'sky', difficulty: 2, season: ["Winter"], country: "Argentina"})
      .then(() => done(new Error ('Season should be a string')))
      .catch(() => done())
  })
})

