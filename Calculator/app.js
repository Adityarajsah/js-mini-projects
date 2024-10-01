let input = '';

function pressKey(key) {
  input += key;
  document.getElementById('screen').value = input;
}

function clearScreen() {
  input = '';
  document.getElementById('screen').value = '';
}

function deleteLast() {
  input = input.slice(0, -1);
  document.getElementById('screen').value = input;
}

function calculate() {
  try {
    input = eval(input);
    document.getElementById('screen').value = input;
  } catch (error) {
    document.getElementById('screen').value = 'Error';
    input = '';
  }
}
