const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require("./routes");

const app = express();

const isProduction = process.env.SERVER === 'production';

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/reason_digital');
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(routes);


if (!isProduction) {
    app.use(function (err, req, res, next) {
        if (err) {
            console.log(err);
            res.status(err.status || 500);
            res.json({
                'errors': {
                    message: err.message,
                    error: {}
                }
            });
        }
    });
}

module.exports = app;
