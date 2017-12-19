const poloniexParser = require('./parser.poloniex');
const bittrexParser = require('./parser.bittrex');

const parsers = {
  'poloniex': poloniexParser,
  'bittrex': bittrexParser
};

module.exports = {
  parsedResult : (exchange, data) => parsers[exchange](data)
};