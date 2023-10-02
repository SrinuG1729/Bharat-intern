function convertToFahrenheit() {
    var celsius = parseFloat(document.getElementById("celsius").value);
    var kelvin = parseFloat(document.getElementById("kelvin").value);
    
    if (!isNaN(celsius)) {
        var fahrenheit = (celsius * 9/5) + 32;
        document.getElementById("result").textContent = `${celsius} Celsius is equal to ${fahrenheit.toFixed(2)} Fahrenheit`;
    } else if (!isNaN(kelvin)) {
        var fahrenheit = (kelvin - 273.15) * 9/5 + 32;
        document.getElementById("result").textContent = `${kelvin} Kelvin is equal to ${fahrenheit.toFixed(2)} Fahrenheit`;
    }
}

function convertToCelsius() {
    var fahrenheit = parseFloat(document.getElementById("fahrenheit").value);
    var kelvin = parseFloat(document.getElementById("kelvin").value);
    
    if (!isNaN(fahrenheit)) {
        var celsius = (fahrenheit - 32) * 5/9;
        document.getElementById("result").textContent = `${fahrenheit} Fahrenheit is equal to ${celsius.toFixed(2)} Celsius`;
    } else if (!isNaN(kelvin)) {
        var celsius = kelvin - 273.15;
        document.getElementById("result").textContent = `${kelvin} Kelvin is equal to ${celsius.toFixed(2)} Celsius`;
    }
}

function convertToKelvin() {
    var fahrenheit = parseFloat(document.getElementById("fahrenheit").value);
    var celsius = parseFloat(document.getElementById("celsius").value);
    
    if (!isNaN(fahrenheit)) {
        var kelvin = (fahrenheit - 32) * 5/9 + 273.15;
        document.getElementById("result").textContent = `${fahrenheit} Fahrenheit is equal to ${kelvin.toFixed(2)} Kelvin`;
    } else if (!isNaN(celsius)) {
        var kelvin = celsius + 273.15;
        document.getElementById("result").textContent = `${celsius} Celsius is equal to ${kelvin.toFixed(2)} Kelvin`;
    }
}