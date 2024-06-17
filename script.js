const display = document.getElementById('display');

function clearDisplay() {
    display.textContent = '0';
}

function deleteLast() {
    display.textContent = display.textContent.slice(0, -1) || '0';
}

function appendCharacter(character) {
    if (display.textContent === '0' && character !== '.') {
        display.textContent = '';
    }
    display.textContent += character;
}

function calculate() {
    try {
        display.textContent = eval(display.textContent);
    } catch {
        display.textContent = 'Erro';
    }
}
