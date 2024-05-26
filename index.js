// Part of Web API, doesn't works in node
// console.log(window);
// console.log(document);

//
// console.log(global);
// console.log(process);

// Module import and export
const { generateRandomNumber, celciusToFahrenheit } = require('./utils');

console.log(`Random Number: ${generateRandomNumber()}`);

console.log(`Celcius to fahrenhiet: ${celciusToFahrenheit(37)}`);