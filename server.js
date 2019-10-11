const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();

app.use(express.static(path.join(__dirname, 'client/build')));

// An api endpoint that returns a short list of items
app.get('/CSGO/values/eur', (req,response) => {
    axios.get('http://api.nbp.pl/api/exchangerates/rates/A/EUR/')
    .then((res)=>{
        response.json(res.data.rates[0].mid);
    }).catch(()=>{
        console.log("Problem z pobaniem danych /values/eur");
    })
});
app.get('/CSGO/values/usd', (req,response) => {
    axios.get('http://api.nbp.pl/api/exchangerates/rates/A/USD/')
    .then((res)=>{
        response.json(res.data.rates[0].mid);
    }).catch(()=>{
        console.log("Problem z pobaniem danych /values/usd");
    })
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);