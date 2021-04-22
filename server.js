const express = require("express");
const mongoose = require("mongoose");

const config = require('./config');

const app = express();

app.use(express.json());

mongoose.connect(config.MONGO_URI);
mongoose.connection.on('error', function(err) {
    console.log('Error: Could not connect to MongoDB.');
});

require('./routes') (app)

const PORT = process.env.PORT || config.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});