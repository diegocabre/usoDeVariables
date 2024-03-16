// Pedir al usuario que ingrese dos números diferentes y mayores a cero
let num1 = parseFloat(prompt("Ingrese el primer número:"));
let num2 = parseFloat(prompt("Ingrese el segundo número:"));

// Verificar que los números ingresados sean diferentes y mayores a cero
if (num1 <= 0 || num2 <= 0 || num1 === num2) {
    alert("Por favor, ingrese dos números diferentes y mayores a cero.");
} else {
    // Calcular las operaciones
    let suma = num1 + num2;
    let resta = num1 - num2;
    let division = num1 / num2;
    let multiplicacion = num1 * num2;
    let modulo = num1 % num2;

    // Mostrar los resultados
    console.log("Suma:", suma);
    console.log("Resta:", resta);
    console.log("División:", division);
    console.log("Multiplicación:", multiplicacion);
    console.log("Módulo:", modulo);
}

// Pedir al usuario que ingrese la temperatura en grados Celsius
let celsius = parseFloat(prompt("Ingrese la temperatura en grados Celsius:"));

// Convertir Celsius a Kelvin
let kelvin = celsius + 273.15;

// Convertir Celsius a Fahrenheit
let fahrenheit = (celsius * 9/5) + 32;

// Mostrar los resultados
console.log(celsius + " grados Celsius equivalen a " + kelvin + " grados Kelvin.");
console.log(celsius + " grados Celsius equivalen a " + fahrenheit + " grados Fahrenheit.");
