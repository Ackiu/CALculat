const display = document.getElementById("display");

function appendToDisplay(value) {
    if (value === '.') {
        if (display.value.includes('.')) {
            return;
    }
}

    if (display.value === '0' && value !== '.') {
        display.value = value;
    } else {
        display.value += value;
    }

}
function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Aldaa';
    }
}