const number1Element = document.querySelector(`#number`);
const number2Element = document.querySelector(`#number2`);
const addElement = document.querySelector(`#add`);
const subElement = document.querySelector(`#sub`);
const resultElement = document.querySelector(`#result`);

addElement.addEventListener(`click`, function (event) {
const number1 = parseFLoat(number1Element.value);
const number2 = parseFLoat(number2Element.value);

if (isNaN(number1) || isNaN(number2)) {
    alert("Molimo unesite dva broja");

    return;
}

const result = number1 + number2;
const result = number1 - number2;
resultElement.value = result;
});