const { response } = require('express');
const express = require('express');
const app = express();

//to handle post request data:
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

//routes
require('./routes/routes')(app);

app.listen(8000, () => console.log("Run yo shit on 8000"));