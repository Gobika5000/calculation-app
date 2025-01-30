function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function appendCharacter(character) {
    let display = document.getElementById('display');
    display.value += character;
}

function calculate() {
    let display = document.getElementById('display');
    display.value = eval(display.value);
}
