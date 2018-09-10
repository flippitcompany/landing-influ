const index = require('./landing');

const _assignRoutes = (app) => {
    app.use('/', index);
}

module.exports = {
    assignRoutes: _assignRoutes
}