function modifyArray() {
  const inputArrayStr = document.getElementById("inputArray").value;
  const inputArray = inputArrayStr
    .split(",")
    .map((num) => parseInt(num.trim()));

  const modifiedArray = inputArray
    .filter((num) => num % 2 === 0)
    .map((num) => num * 2);

  const resultDiv = document.getElementById("result");
  resultDiv.textContent = "Modified Array: " + modifiedArray.join(", ");
}

function validatePassword() {
  const passwordInput = document.getElementById("password");
  const errorMsg = document.getElementById("error-msg");

  const password = passwordInput.value;

  if (!isValidPassword(password)) {
    errorMsg.textContent = "Please enter a valid password.";
    passwordInput.value = "";
  } else {
    errorMsg.textContent = "";
    alert("Password set successfully!");
  }
}

function isValidPassword(password) {
  if (password.length < 6) {
    return false;
  }

  if (!isNaN(password.charAt(0))) {
    return false;
  }

  let hasLetter = false;
  let hasNumber = false;
  for (let i = 0; i < password.length; i++) {
    const charCode = password.charCodeAt(i);
    if (
      (charCode >= 65 && charCode <= 90) ||
      (charCode >= 97 && charCode <= 122)
    ) {
      hasLetter = true;
    } else if (charCode >= 48 && charCode <= 57) {
      hasNumber = true;
    }
  }

  return hasLetter && hasNumber;
}
////////
function findCommonElements() {
  const array1Input = document.getElementById("array1").value;
  const array2Input = document.getElementById("array2").value;

  const array1 = array1Input.split(",").map((num) => parseInt(num.trim()));
  const array2 = array2Input.split(",").map((num) => parseInt(num.trim()));

  const commonElements = findCommonElementsInArrays(array1, array2);

  const resultDiv = document.getElementById("resultQues3");
  if (commonElements.length === 0) {
    resultDiv.textContent = "No common elements found.";
  } else {
    resultDiv.textContent = "Common Elements: " + commonElements.join(", ");
  }
}

function findCommonElementsInArrays(array1, array2) {
  const commonElements = [];

  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        commonElements.push(array1[i]);
        break;
      }
    }
  }

  return commonElements;
}
////////
function checkPrime() {
  const numberInput = document.getElementById("number").value;
  const number = parseInt(numberInput);

  const resultDiv = document.getElementById("resultQues4");

  if (isPrime(number)) {
    resultDiv.textContent = number + " is a prime number.";
  } else {
    resultDiv.textContent = number + " is not a prime number.";
  }
}

function isPrime(num) {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}
/////////////////
function flattenArray() {
  const nestedArrayInput = document.getElementById("nestedArray").value;

  const nestedArray = JSON.parse(nestedArrayInput);

  const flattenedArray = flattenNestedArray(nestedArray);

  const resultDiv = document.getElementById("resultQues5");
  resultDiv.textContent = "Flattened Array: " + JSON.stringify(flattenedArray);
}

function flattenNestedArray(nestedArray) {
  return nestedArray.reduce((acc, val) => {
    return acc.concat(Array.isArray(val) ? flattenNestedArray(val) : val);
  }, []);
}
