const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const port = process.env.PORT || 3000;
const path = require('path')
const OSRM = require('osrm')


const app = express()



app.use(bodyParser.json());
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});



var osrm = new OSRM(path.resolve(__dirname, "./data/languedoc-roussillon-latest.osrm"));

app.post('/osrm/routes/', function (req, res) {
  var query = req.body.coordinates;
  osrm.route({coordinates: query, overview: 'full'}, function(err, result) {
    if(err) throw err;
    res.status(200).json(result.routes)
  });
})


app.use(morgan('tiny'));
app.listen(port)
