const AWS = require('aws-sdk');
const http = require('https');

AWS.config.region = 'us-east-1';

const parsers = require('./parsers');
const utils = require('./utils');
const urls = {
  'poloniex' : 'https://poloniex.com/public?command=returnTicker',
  'bittrex' : 'https://bittrex.com/api/v1.1/public/getmarketsummaries'
};

exports.handler = function(evt, context, callback) {
    
  let exchange = evt.queryStringParameters.exchange || 'poloniex';
  
  http.get(urls[exchange], function(res) {
    let data = '';
    res.on('data', chunk => data += chunk);
    
    res.on('end', _ => callback(null, utils.successResponse(parsers.parsedResult(exchange, JSON.parse(data)))));
    
    res.on('error', err => callback(err));
  });
};
