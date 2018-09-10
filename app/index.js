const express      = require('express');
const logger       = require('morgan');
const bodyParser   = require('body-parser');
const databaseTool = require('./tools/database');
const routes       = require('./routes');

const app = express();

databaseTool.DBConnectMongoose()
  .then(() => {
    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(express.static(__dirname + '/public'));
    
    routes.assignRoutes(app);

    // catch 404 and forward to error handler
    app.use((req, res, next) => {
      const err = new Error('Not Found');
      err.status = 404;
      next(err);
    });
    
    // error handler
    app.use((err, req, res, next) => {
      // set locals, only providing error in development
      res.locals.message = err.message;
      res.locals.error = req.app.get('env') === 'development' ? err : {};
    
      res.status(err.status || 500);
      res.send({message: `error code: ${err.status}`});
    });
  })
  .catch(err => console.log(err));

module.exports = app;