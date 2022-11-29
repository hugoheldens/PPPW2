/*function tablaMultiplicar() {

 let a = parseInt(prompt("inserta un numero: "))

 let b = parseInt(prompt("inserta un numero: "))

for (let i = 0; i<=b.leght; i++){

	let resultado = a * b;
	console.log("este es tu resultado: "+ resultado);
	}
}
tablaMultiplicar();*/
/*let nombre ="arturo";
console.log(`
	saludo:
	${nombre}
	`);
console.log(`saludo:${nombre}`);

console.log (`nombre:${nombre.toUpperCase()}`);*/

/*var estado = true ;
if(estado){

	var estado =false
	console.log(estado)
}
console.log(estado)
*/
/*const frutas=["melon", "manzana"];
frutas.push("sandia")
frutas.unshift("las peras")
console.log(frutas)
const frutasEliminada=["melon", "manzana"];
frutasEliminada.pop();
console.log(frutasEliminada)
*/

const irDeCompras = [0];
const recolectar =prompt("eligue una frutas: ");
irDeCompras.push(recolectar)
console.log(irDeCompras)
while(confirm('deseas otra fruta')){

const recolectar =prompt("eligue una frutas: ");
 
irDeCompras.push(recolectar)
}