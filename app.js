var express = require("express")
const mongoose = require('mongoose');
require('dotenv').config();
const routes = require('./routes/users');
const wildFiresRoute = require('./routes/wildFires');

const mongoString = process.env.DATABASE_URL
var app = express()

app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/users', routes);
app.use('/api/wildfires', wildFiresRoute);

const cardList = [ 
    {
        title: "Wildfire 1",
        image: "images/wildfires-1.jpg",
        link: "About wildfire 1",
        desciption: "Demo desciption about wildfire 1"
    },
    {
        title: "Wildfire 2",
        image: "images/wildfires-2.jpg",
        link: "About wildfire 2",
        desciption: "Demo desciption about wildfire 2"
    },
    {
        title: "Wildfire 3",
        image: "images/wildfires-3.jpg",
        link: "About wildfire 3",
        desciption: "Demo desciption about wildfire 3"
    }
]

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

app.get('/api/projects',(req,res) => {
    res.json({statusCode: 200, data: cardList, message:"Success"})
});

module.exports = app;