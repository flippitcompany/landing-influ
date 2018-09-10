const express = require('express');
const router  = express.Router();
const path    = require('path');

const _get = (req, res, next) => {
  const landing = `${__dirname.replace('/routes', '')}/public/landing/index.html`;
  res.sendFile(landing);
};

/* GET home page. */
router.get('/', _get);

module.exports = router;
