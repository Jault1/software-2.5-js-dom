// Create the following elements:

// two number input fields
// 5 buttons corresponding to the 5 basic arithmetic operations (addition, subtraction, multiplication, division)
// paragraph with span for result
// Use the necessary query selectors and attributes to perform the necessary operation between the two numbers when a corresponding button is pressed.


function calcIt(mathFunction) {
    /* Get the values from the input boxes */
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let result;

    /* Convert the numbers from string to number so you can do math */
    num1 = Number(num1);
    num2 = Number(num2);
    
    if (mathFunction == "add") {
        result = num1 + num2;
    } else if (mathFunction == "sub") {
        result = num1 - num2;
    } else if (mathFunction == "mult") {
        result = num1 * num2;
    } else if (mathFunction == "div") {
        result = num1 / num2;
      } else if (mathFunction == "mod") {
        result = num1 % num2;
    } else {
        // do nothing}
    }
    displayResult(result);
    //alert(typeof result);

}

function displayResult(result) {
    document.getElementById("result").innerHTML = result;
}

