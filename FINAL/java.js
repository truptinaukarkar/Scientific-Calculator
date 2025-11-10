let display = document.getElementById("display");
let historyList = document.getElementById("historyList");

function append(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function deleteChar() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    let expression = display.value;
    let result = eval(expression);
    display.value = result;
    updateHistory(expression, result);
  } catch (e) {
    display.value = "Error";
  }
}

function updateHistory(expression, result) {
  const li = document.createElement("li");
  li.textContent = `${expression} = ${result}`;
  historyList.prepend(li); // newest at top

  if (historyList.childNodes.length > 10) {
    historyList.removeChild(historyList.lastChild);
  }
}

function sinFunc() {
  let val = parseFloat(display.value);
  if (!isNaN(val)) {
    let res = Math.sin((val * Math.PI) / 180);
    updateHistory(`sin(${val})`, res);
    display.value = res;
  }
}

function cosFunc() {
  let val = parseFloat(display.value);
  if (!isNaN(val)) {
    let res = Math.cos((val * Math.PI) / 180);
    updateHistory(`cos(${val})`, res);
    display.value = res;
  }
}

function tanFunc() {
  let val = parseFloat(display.value);
  if (!isNaN(val)) {
    let res = Math.tan((val * Math.PI) / 180);
    updateHistory(`tan(${val})`, res);
    display.value = res;
  }
}

function logFunc() {
  let val = parseFloat(display.value);
  if (!isNaN(val)) {
    let res = Math.log10(val);
    updateHistory(`log(${val})`, res);
    display.value = res;
  }
}

function lnFunc() {
  let val = parseFloat(display.value);
  if (!isNaN(val)) {
    let res = Math.log(val);
    updateHistory(`ln(${val})`, res);
    display.value = res;
  }
}

function sqrtFunc() {
  let val = parseFloat(display.value);
  if (!isNaN(val)) {
    let res = Math.sqrt(val);
    updateHistory(`√(${val})`, res);
    display.value = res;
  }
}

function squareFunc() {
  let val = parseFloat(display.value);
  if (!isNaN(val)) {
    let res = Math.pow(val, 2);
    updateHistory(`${val}²`, res);
    display.value = res;
  }
}

function factorialFunc() {
  let val = parseInt(display.value);
  if (!isNaN(val) && val >= 0) {
    let res = factorial(val);
    updateHistory(`${val}!`, res);
    display.value = res;
  }
}

function factorial(n) {
  return n <= 1 ? 1 : n * factorial(n - 1);
}
