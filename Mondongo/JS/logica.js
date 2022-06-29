let x, y, sumador, text, restador, multiplicador, divididor;
const suma = () => {
    x = parseFloat(document.getElementById("num1").value);
    y = parseFloat(document.getElementById("num2").value);
    sumador = x + y;
    text = sumador;
    document.getElementById("Resultado").innerHTML = text;

    if(isNaN(x)){
        alert("No ingrese letras")
    }
    if(isNaN(y)){
        alert("No ingrese letras")
    }
}
const resta = () => {
    x = parseFloat(document.getElementById("num1").value);
    y = parseFloat(document.getElementById("num2").value);
    restador = x - y;
    text = restador;
    document.getElementById("Resultado").innerHTML = text;
    if(isNaN(x)){
        alert("No ingrese letras")
    }
    if(isNaN(y)){
        alert("No ingrese letras")
    }
}
const mult = () => {
    x = parseFloat(document.getElementById("num1").value);
    y = parseFloat(document.getElementById("num2").value);
    multiplicador = x * y;
    text = multiplicador;
    document.getElementById("Resultado").innerHTML = text;
    if(isNaN(x)){
        alert("No ingrese letras")
    }
    if(isNaN(y)){
        alert("No ingrese letras")
    }
}
const div = () => {
    x = parseFloat(document.getElementById("num1").value);
    y = parseFloat(document.getElementById("num2").value);
    divididor = x / y;
    text = divididor;
    document.getElementById("Resultado").innerHTML = text;
    if(isNaN(x)){
        alert("No ingrese letras")
    }
    if(isNaN(y)){
        alert("No ingrese letras")
    }
}
