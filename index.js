// Part of Web API, doesn't works in node
// console.log(window);
// console.log(document);

//
// console.log(global);
// console.log(process);

// Module import and export
// const { generateRandomNumber, celciusToFahrenheit, getName } = require('./utils');
// require() doesn't work in ES module scope, rather use import()
import getName, { generateRandomNumber, celciusToFahrenheit } from './utils.js'

console.log(`Random Number: ${generateRandomNumber()}`);

console.log(`Celcius to fahrenhiet: ${celciusToFahrenheit(37)}`);

console.log(getName());