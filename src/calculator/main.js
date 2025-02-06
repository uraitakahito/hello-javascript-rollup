// https://ics.media/entry/190517/
const elementSelect = document.querySelector('#calcType');
const elementNum1 = document.querySelector('#num1');
const elementNum2 = document.querySelector('#num2');
const elementResult = document.querySelector('#result');

const add = (num1, num2) => {
  const result = num1 + num2;
  return result;
};

const substract = (num1, num2) => {
  const result = num1 - num2;
  return result;
};

const multiply = (num1, num2) => {
  const result = num1 * num2;
  return result;
};

const divide = (num1, num2) => {
  const result = num1 / num2;
  return result;
};

const calculate = (num1, num2, calcType) => {
  let result;
  // eslint-disable-next-line default-case
  switch (calcType) {
    case 'type-add':
      result = add(num1, num2);
      break;
    case 'type-substract':
      result = substract(num1, num2);
      break;
    case 'type-multiply':
      result = multiply(num1, num2);
      break;
    case 'type-divide':
      result = divide(num1, num2);
      break;
  }
  return result;
};

const update = () => {
  const result = calculate(
    Number(elementNum1.value),
    Number(elementNum2.value),
    elementSelect.value,
  );

  elementResult.innerHTML = result;
};

elementSelect.addEventListener('change', update);
elementNum1.addEventListener('change', update);
elementNum2.addEventListener('change', update);
