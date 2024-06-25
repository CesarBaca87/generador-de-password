// El styles lo importamos aquí para que se encargue Vite de compilar todo
import '../scss/styles.scss';

const passwordElement = document.getElementById('password');
const lengthTextElement = document.getElementById('length-text');
const rangeElement = document.getElementById('range');
const buttonGenerateElement = document.getElementById('generate-password');

const allowedCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890!@#$%^&*()_+-={}[]:;<>,.?/';

let passwordLength = rangeElement.value;
let finalPassword = '';

const changeLengthText = event => {
  passwordLength = event.target.value;
  lengthTextElement.textContent = passwordLength;
};

const generateRandomPosition = () => {
  const randomPosition = Math.floor(Math.random() * allowedCharacters.length);
  return randomPosition;
};

const getRandomCharacter = () => {
  const randomPosition = generateRandomPosition();
  const randomCharacter = allowedCharacters.charAt(randomPosition);
  return randomCharacter;
};

const generatePassword = () => {
  finalPassword = '';
  for (let i = 0; i < passwordLength; i++) {
    const randomCharacter = getRandomCharacter();
    finalPassword += randomCharacter;
  }
  passwordElement.value = finalPassword;
};
rangeElement.addEventListener('input', changeLengthText);
buttonGenerateElement.addEventListener('click', generatePassword);
