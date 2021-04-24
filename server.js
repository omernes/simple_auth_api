const express = require("express");
const mongoose = require("mongoose");

const config = require('./config');

const app = express();

app.use(express.json());

mongoose.connect(config.MONGO_URI);
mongoose.connection.on('error', function(err) {
    console.log('Error: Could not connect to MongoDB.');
    process.exit(1);
});

require('./routes') (app)

app.use((error, req, res, next) => {
    if (!error.statusCode) error.statusCode = 500;

    return res
        .status(error.statusCode)
        .json({ message: error.toString() });
})

const PORT = config.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});