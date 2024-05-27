function generateRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

function celciusToFahrenheit(celcius) {
  return (celcius * 9) / 5 + 32;
}

// module.exports = {
//   generateRandomNumber,
//   celciusToFahrenheit,
// };

// exports.generateRandomNumber = generateRandomNumber;
// exports.celciusToFahrenheit = celciusToFahrenheit;

// module.exports.getName = () => {
//   return 'Ankush';
// }

// ES6 type module export
export {
  generateRandomNumber,
  celciusToFahrenheit,
}

const getName = () => {
  return 'Ankush';
}
export default getName;