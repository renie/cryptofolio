module.exports = data => {
  let newData = {};

  data.result.forEach(item => newData[item.MarketName.replace('-','').toLowerCase()] = item.Last);

  return newData;
};