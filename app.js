let submitBtn = document.getElementById("sub-btn");
let cButton = document.getElementById("cButton");
let fButton = document.getElementById("fButton");
let result = document.getElementById("result");
let enteredValue = document.getElementById("enteredTemperature");
let VALUE = null;

submitBtn.onclick = function () {  //SUBMIT BUTTON FUNCTIONS
    VALUE = enteredValue.value;
    if (cButton.checked && VALUE) {  // CONVERTING TO CELSIUS
        result.innerHTML = `Converted Value: ${toCelsius(VALUE)} °C`;
        result.style.color = "black";
    } else if (fButton.checked && VALUE) { //CONVERTING TO FAHRENHEIT
        result.innerHTML = `Converted Value: ${toFahrenheit(VALUE)} °F`;
        result.style.color = "black";
    } else if (!VALUE) {  //THROWING ERROR IF VALUE NOT ENTERED
        result.innerHTML = "Converted Value: VALUE NOT ENTERED!!";
        result.style.color = "red";
    } else {               //THROWING ERROR IF CONVERSION DID NOT SELECTED
        result.innerHTML = "Converted Value: CONVERSION DID NOT SELECTED!!";
        result.style.color = "red";
    }
}


// FUNCTION TO CONVERT TO CELSIUS
function toCelsius(temp) {
    return (temp - 32) * (5 / 9);
}

// FUNCTION TO CONVERT TO FAHRENHEIT
function toFahrenheit(temp) {
    return temp * 9 / 5 + 32;
}

