// in this example we are just building our own web API. sending out json data. each route is a web API

const express = require('express')
const cors = require('cors')
const app = express()
const Coordinate = require('./coordinate')

app.use(express.json())
app.use(cors())

let locations = []

app.post('/save-location', (req,res) => {
    let latitude = req.body.lat
    let longitude = req.body.long

    let coordinate = new Coordinate(latitude,longitude)

    locations.push(coordinate)

    res.status(200).send('awesome')
})

app.get('/all-locations', (req,res) => {
    res.json(locations)
})

const PORT = 3001
app.listen(PORT, () => {
    console.log('Server is running...')
})