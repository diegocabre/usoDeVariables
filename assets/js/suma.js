// Solicitar al usuario que ingrese 5 números
let num1 = parseFloat(prompt("Ingrese el primer número:"));
let num2 = parseFloat(prompt("Ingrese el segundo número:"));
let num3 = parseFloat(prompt("Ingrese el tercer número:"));
let num4 = parseFloat(prompt("Ingrese el cuarto número:"));
let num5 = parseFloat(prompt("Ingrese el quinto número:"));

// Calcular la suma de los números
let suma = num1 + num2 + num3 + num4 + num5;

// Calcular el promedio de los números
let promedio = suma / 5;

// Mostrar la suma y el promedio
console.log("La suma de los números es: " + suma);
console.log("El promedio de los números es: " + promedio);
