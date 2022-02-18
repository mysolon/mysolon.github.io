'use strict';

const fs = require('fs');

let rawdata = fs.readFileSync('data.json');
let student = JSON.parse(rawdata);
console.log(student);
var today = new Date();

today.toLocaleString('el-GR')