const express = require('express');
const api_helper = require('./API_helper');
const logger = require('./logger');
const app = express();

//SERVER PORT
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/getAPIResponse', logger.loggerFunc, (req, res) => {
  api_helper
    .make_API_call(
      'https://6god8pgyzf.execute-api.us-west-2.amazonaws.com/databases'
    )
    .then((response) => {
      res.json(response);
    })
    .catch((error) => {
      res.send(error);
    });
});

app.listen(port, (req, res) => {
  console.log(`SERVER is RUNNING ON PORT ${port}`);
});
