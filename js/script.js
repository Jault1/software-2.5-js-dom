// Create the following elements:

// two number input fields
// 5 buttons corresponding to the 5 basic arithmetic operations (addition, subtraction, multiplication, division)
// paragraph with span for result
// Use the necessary query selectors and attributes to perform the necessary operation between the two numbers when a corresponding button is pressed.


function calcIt(mathFunction) {
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;

    if (mathFunction == "add") {
        let result = Number(num1) + Number(num2);
        displayResult(result);
    } else if (mathFunction == "sub") {
        let result = Number(num1) - Number(num2);
        displayResult(result);
    } else if (mathFunction == "mult") {
        let result = Number(num1) * Number(num2);
        displayResult(result);
    } else if (mathFunction == "div") {
        let result = Number(num1) / Number(num2);
        displayResult(result);
      } else if (mathFunction == "mod") {
        let result = Number(num1) % Number(num2);
        displayResult(result);
    } else {
        // do nothing}
    }
}

function displayResult(result) {
    document.getElementById("result").innerHTML = result;
}
