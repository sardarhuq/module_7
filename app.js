const express = require('express');
const app = new express();
const router = require('./src/routes/api');

app.use('/api', router);
app.use('*', (req, res) => {
  res.status(404).json({ status: 'fail', data: 'not found' });
});
module.exports = app;
