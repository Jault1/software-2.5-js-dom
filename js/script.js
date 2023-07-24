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

function changeStyle() {
    document.getElementById("result").style.border = '1px solid #fed9b7';
;    document.getElementById("numLabel").style.color = '#0081a7';
    document.getElementById("numLabel2").style.color = '#0081a7';
    document.getElementById("calcHead").classList.add('glow');
    document.getElementById("resultHead").classList.add('glow');





    // body {
    //     margin: 0;
    //     font-size: 20px;
    //     /* font-family: 'Trebuchet MS', Arial, Tahoma, Verdana, Helvetica, sans-serif; */
    //     font-family: 'Audiowide', cursive;
    //     /* font-family: 'Hanken Grotesk', sans-serif; */
    //     color: #00afb9;
    //     Padding-left: 50px;
    // }
    
    // h1 {
    //     padding-top: 50px;
    //     padding-bottom: 6px;
    //     color: #0081a7;
    
    // }
    
    // input {
    //     margin-bottom: 22px;
    //     margin-left: 22px;
    // }
    
    // label {
    //     padding-bottom: 22px;
    //     color: #f07167;
    // }
    
    // h2 {
    //     padding-top: 50px;
    //     padding-bottom: 12px;
    //     margin-left: 50px;
    // }
    
    // #result {
    //     margin-left: 50px;
    //     border: 1px solid #f07167;
    //     width: 10%;
    //     padding: 12px;
    // }
}
