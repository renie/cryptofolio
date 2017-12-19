module.exports = data => {
  let newData = {};
  
  Object.keys(data)
        .forEach(key => newData[key.replace('_','').toLowerCase()] = data[key].last);
          
  return newData;
};