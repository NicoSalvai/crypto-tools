//Install express server
const express = require('express');
const path = require('path');
//const cors = require('cors');


const app = express();

const { Pool, Client } = require('pg')
const pool = new Pool({
 connectionString: 'postgres://ijanluzysekuub:3219063e42015fc872396469629ba5a8f25f4907380081818cff19bc7312ef20@ec2-184-73-198-174.compute-1.amazonaws.com:5432/d6s55egrh72fi',
 ssl: {
 rejectUnauthorized: false
 }
});

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/crypto-tools'));

// API 
app.get('/api/plants', (request, response) => {
    response.header('Access-Control-Allow-Origin', '*');
    response.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    response.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    pool.query(`SELECT * FROM plants;`, (err, res) => {
        if (err) {
            console.log("Error - Failed to select all from Users");
            console.log(err);
        }
        else{
            console.log(res.rows);
            response.json(res.rows);
        }
    });
  })



app.get('/*', function(req,res) {
res.sendFile(path.join(__dirname+'/dist/crypto-tools/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);


  