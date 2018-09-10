const mongoose = require('mongoose');
const config = require('../config/database.json');
require('dotenv').config()
const dbUrl = process.env.DB_URL || 'mongodb://' + config.db_config.host + ":" + config.db_config.port + "/" + config.db_config.name;
let db;

const _DBConnectMongoose = () => {
    return new Promise((resolve, reject) => {
        mongoose.Promise = global.Promise;
        if (db) {
            return resolve(db);
        }
        mongoose.connect(dbUrl, { useNewUrlParser: true })
            .then(() => {
                db = mongoose.connection
                console.log('Connection to database created!');
                resolve(db);
            })
            .catch(err => {
                console.log('error creating db connection: ' + err);
                reject(err);
            });
    });
};

module.exports = {
    DBConnectMongoose: _DBConnectMongoose
}