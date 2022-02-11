require('dotenv').config()
const express = require("express");
const bodyParser = require('body-parser');
const initMongoose = require('./mongoose_manager');
const cors = require('cors');
const routes = require("./routes");

const app = express();

const isProduction = process.env.SERVER === 'production';

initMongoose();

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
