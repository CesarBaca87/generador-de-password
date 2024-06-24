// El styles lo importamos aquí para que se encargue Vite de compilar todo
import '../scss/styles.scss';

const passwordElement=document.getElementById('password');
const lengthTextElement=document.getElementById('length-text');
const rangeElement=document.getElementById('range');
const buttonGenerateElement=document.getElementById('generate-password');

const allowedCharacters='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890!@#$%^&*()_+-={}[]:;<>,.?/'

let passwordLength=rangeElement.value;
let finalPassword='';

const changeLengthText=event=>{
    passwordLength=event.target.value
    lengthTextElement.textContent=passwordLength;
}

const generatePassword=()=>{
    finalPassword='';
    for(let i=0;i<passwordLength;i++){
        const randomPosition=Math.floor(Math.random()*allowedCharacters.length);
        const randomCharacter=allowedCharacters.charAt(randomPosition);
        finalPassword += randomCharacter;
    }
    passwordElement.value = finalPassword
}
rangeElement.addEventListener('input',changeLengthText);
buttonGenerateElement.addEventListener('click',generatePassword);