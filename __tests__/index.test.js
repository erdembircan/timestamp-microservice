const request = require('supertest');

const utils = require('../server/utils');
const app = require('../server/app');

describe('utils', () => {
  it('should validate Date objects', () => {
    let testDate = new Date();
    expect(utils.validDateCheck(testDate)).toBeTruthy();
    testDate = new Date('some invalid date string');
    expect(utils.validDateCheck(testDate)).toBeFalsy();
  });
  it('should return correct month name', () => {
    const testDate = new Date();
    const utilMonthName = utils.Months[testDate.getMonth()];
    const shortMonth = testDate.toLocaleString('en-us', { month: 'long' });
    expect(utilMonthName).toBe(shortMonth);
  });
});

describe('server', () => {
  it('should return index page', (done) => {
    request(app)
      .get('/')
      .then((res) => {
        expect(res.statusCode).toBe(200);
        done();
      });
  });
  it('should return json', (done) => {
    request(app)
      .get('/0')
      .then((res) => {
        expect(res.header['content-type'].includes('json')).toBeTruthy();
        done();
      });
  });
  it('should return null values for invalid requests', (done) => {
    request(app)
      .get('/some invalid req')
      .then((res) => {
        const resObj = JSON.parse(res.text);
        expect(resObj.unix).toBe(null);
        expect(resObj.natural).toBe(null);
        done();
      });
  });
  it('should return correct values for string requests', (done) => {
    request(app)
      .get('/December%2015,%202015')
      .then((res) => {
        const resObj = JSON.parse(res.text);
        expect(resObj.unix).toBe(1450137600);
        expect(resObj.natural).toBe('December 15, 2015');
        done();
      });
  });
  it('should return correct values for unix requests', (done) => {
    request(app)
      .get('/1450137600')
      .then((res) => {
        const resObj = JSON.parse(res.text);
        expect(resObj.unix).toBe(1450137600);
        expect(resObj.natural).toBe('December 15, 2015');
        done();
      });
  });
});
