
function performOperation() {
    // Get user input from input fields
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);
    let operation = document.getElementById('operation').value;

    // Check if inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
        // Perform the operation
        let result = calculate('a', num2, operation);

        // Display the result
        displayResult(result);
    } else {
        displayResult('Please enter valid numbers');
    }
}

function multiply(a, b) {
    // Introduce a debugger statement to pause execution
    debugger;

    // Multiply the numbers
    return a * b;
}

function calculate(a, b, operation) {
    debugger;
    if (operation === 'add')
        return a + b;
    if (operation === 'multiply')
        return a * b;
    if (operation === 'divide')
        return a / b;
}

function displayResult(result) {
    // Display the result in the paragraph element
    const resultElement = document.getElementById('result');
    resultElement.textContent = `The result is: ${result}`;
}
