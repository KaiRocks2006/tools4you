
  let display = document.getElementById('display');

  function appendToDisplay(value) {
    display.value += value;
  }

  function clearDisplay() {
    display.value = '';
  }

  function calculateResult() {
    try {
      const result = Function('"use strict";return (' + display.value + ')')();
      display.value = result;
    } catch (error) {
      display.value = 'Error';
    }
  }

function returnToMain() {
    window.location.href = 'index.html'
}