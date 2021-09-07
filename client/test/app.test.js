/**
 * @jest-environment jsdom
 */

 const fs = require('fs');
 const path = require('path');
 const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
 
 
 global.fetch = require('jest-fetch-mock');
 let app;

describe('app', () => {
    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
        app = require('../app.js')
    })

    afterEach(() => {
        fetch.resetMocks();
    })

    describe('submit event', () => {
        it('listens for event when submit button pressed', () => {
            const fakeE = {
                preventDefault: jest.fn(),
                    target: {
                       destination : { value: '1' },
                    }
                }
            app.selectDestination(fakeE)
            expect(app.selectDestination).toHaveBeenCalled();
        })
        
    })

        // describe('appendPrice', () => {
        //     test('it renders a new h2 on the page with the price data', () => {
        //         app.appendPrice({id: 1, location: 'Paris', price: '100' });
        //         expect(document.getElementById('#first').textContent).toContain("100");
        //     })
        // })
    })