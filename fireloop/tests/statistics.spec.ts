var should    = require('chai').should();
var supertest = require('supertest');
var api       = supertest('http://localhost:3000/api');

describe('Statistics unit tests:', () => {
    it('Should create a Statistics instance', (done: Function) => {
        api.post('/statistics').send({
            text: 'test',
            dueAt: 'Fri Mar 17 2017 22:18:34 GMT+0100 (Hora estándar romance)'
        }).expect(200, done);
    });
});
