// Hugo, Paco y Luis tienen una cantidad desconocida de monedas cada uno.
// Sabemos que Paco tiene el doble de monedas que Hugo y que Luis tiene 10 monedas más que Paco.
// Si los tres juntos tienen un total de 85 monedas.
// ¿Cuántas monedas tiene cada uno?


// Asignamos la cantidad de monedas de Hugo, este valor es el que tienes que resolver.
// let hugo = 0;
let hugo = 15;

// Calculamos la cantidad de monedas de Paco y Luis en función de Hugo
let paco = 2 * hugo;
let luis = paco + 10;

// Sumamos las cantidades de monedas de los tres amigos
let total = hugo + paco + luis;

if (total === 85) {
  console.log("Hugo: " + hugo)
  console.log("Paco: " + paco)
  console.log("Luis: " + luis)
}