const fs = require('fs');
const csv = require('csvtojson');

const csvFilePath = './data.csv';

const parse = async file => {
  let res;
  let cust = 1;
  let obj = {};
  let blob;
  try {
    res = await csv().fromFile(file);
  } catch (e) {
    console.log(e.message);
  }
  res.forEach(x => {
    obj[`${cust}`] = x;
    cust++;
  });
  blob = { ...obj };
  fs.writeFileSync('./data.json', JSON.stringify(blob));
};

parse(csvFilePath);
