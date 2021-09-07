const request = require('supertest');
const app = require('../app');

describe ('API server', () => {
    let api;

    beforeAll(() => {
        api = app.listen(5000, () =>
        console.log('Test server running on port 5000')
        );
    });

    afterAll((done) => {
        console.log('Gracefully stopping test server');
        api.close(done);
    });

    it('responds to get / with status 200', (done) => {
        request(api).get('/data').expect(200, done);
    });


    it('respons to get /prices with status 200', (done) => {
        request(api).get('/data').expect(200, done)
    })

    it('responds to POST /data with status 200', (done) => {
        request(api).post('/data').expect(200, done)
    })

    it('responds to GET /data/3 with that location data', (done) => {
        request(api)
        .get('/data/3')
        .expect(200)
        .expect({
            id: 3, location: 'Munich', price: '£125'
        }, done)
    })

    it('responds to non existing paths with 404', (done) => {
        request(api).get('/no').expect(404, done);
    });

    it('responds to a unknown location id with a 404', (done) => {
        request(api).get('/data/0').expect(404).expect({}, done);
    });
})