document.getElementById("convertBtn").addEventListener("click", function() {
    var temperatureInput = document.getElementById("temperature").value;
    var unitSelect = document.getElementById("unitSelect").value;
    var result = document.getElementById("solution");
  
    if (temperatureInput !== "") {
        var convertedTemperature;
        var convertedUnit;
  
        if (unitSelect === "celsius") {
            convertedTemperature = (temperatureInput - 32) * 5/9;
            convertedUnit = "°C";
        } 
        else if (unitSelect === "fahrenheit") {
            convertedTemperature = (temperatureInput * 9/5) + 32;
            convertedUnit = "°F";
        }
  
        result.textContent = "Converted Temperature: " + convertedTemperature.toFixed(2) + convertedUnit;
    }
});  