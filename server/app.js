const express = require('express');
const path = require('path');
const app = express();

app.use(require('./middleware'));

app.use(require('./routes'));

app.get('/*', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

// Error handling
app.use((err, req, res, next) => {
  res.status(err.status || 500).send(err.message || 'Internal server error');
});

module.exports = app;
