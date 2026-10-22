const inputScreen = document.getElementById('input');

// Append numbers and regular operators
function appendValue(value) {
    inputScreen.value += value;
}

// Clear the display screen
function clearScreen() {
    inputScreen.value = '';
}

// Backspace functionality
function deleteLast() {
    inputScreen.value = inputScreen.value.slice(0, -1);
}

// Square current expression values
function appendSquare() {
    try {
        if (inputScreen.value !== "") {
            let result = eval(inputScreen.value);
            inputScreen.value = Math.pow(result, 2);
        }
    } catch (e) {
        inputScreen.value = "Error";
    }
}

// Cube current expression values
function appendCube() {
    try {
        if (inputScreen.value !== "") {
            let result = eval(inputScreen.value);
            inputScreen.value = Math.pow(result, 3);
        }
    } catch (e) {
        inputScreen.value = "Error";
    }
}

// Calculate Square Root
function calculateSquareRoot() {
    try {
        if (inputScreen.value !== "") {
            let result = eval(inputScreen.value);
            inputScreen.value = Math.sqrt(result);
        }
    } catch (e) {
        inputScreen.value = "Error";
    }
}

// Calculate Cube Root
function calculateCubeRoot() {
    try {
        if (inputScreen.value !== "") {
            let result = eval(inputScreen.value);
            inputScreen.value = Math.cbrt(result);
        }
    } catch (e) {
        inputScreen.value = "Error";
    }
}

// Evaluate total result string smoothly
function calculateResult() {
    try {
        if (inputScreen.value.trim() === "") return;
        
        let result = eval(inputScreen.value);
        
        // Clean up messy JavaScript decimals if present
        if (result % 1 !== 0) {
            result = parseFloat(result.toFixed(8));
        }
        
        inputScreen.value = result;
    } catch (error) {
        inputScreen.value = "Error";
        setTimeout(clearScreen, 1500);
    }
}