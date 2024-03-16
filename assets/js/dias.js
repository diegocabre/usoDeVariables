// Pedir al usuario que ingrese la cantidad de días
let totalDias = parseInt(prompt("Ingrese la cantidad de días:"));

// Calcular los años, semanas y días
let anios = Math.floor(totalDias / 365);
let semanas = Math.floor((totalDias % 365) / 7);
let dias = totalDias % 7;

// Mostrar los resultados
console.log(totalDias + " días equivalen a:");
console.log(anios + " años,");
console.log(semanas + " semanas, y");
console.log(dias + " días.");
