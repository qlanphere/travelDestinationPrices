const express = require('express')
const travelPrices = require('./data')
const Destination = require('./models/destinations')
const cors = require('cors');


const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json());
app.use(cors());


const travelRoutes = require('./controller/prices')
app.use('/prices', travelRoutes)



app.get('/', (req, res) => {
    res.send('Hello there!')
})

app.post('/', (req, res) => {
    res.status(405).send('Not allowd!');
});

app.get('/data', (req, res) => {
    const destData = Destination.all
    res.send(destData)
})

// app.get(`/data/:id`, (request, response) => {
//     console.log(request.params.id)
//     response.send(travelPrices[request.params.id-1])
// })

app.get('/data/:id', (req, res) => {
    try {
        const locId = parseInt(req.params.id);
        const selectedLoc = Destination.findById(locId);
        res.send(selectedLoc);
    } catch (err) {
        console.log(err);
        res.status(404).send(err);
    }
});

app.post('/data', (req, res) => {
    const data = req.body;
    const newDest = Destination.create(data);
    res.send({message: `${newDest.location} succesfully added to our collection.`})

});


module.exports = app;