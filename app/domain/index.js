const landing = require('../../public/index.html');
const _get = () => {
    const response = landing;
    return response;
};

module.exports = {
    get: _get
}