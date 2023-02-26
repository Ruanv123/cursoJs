const frutas = ["Pera", "Maça", "Uva"];

/* for (let i = 0; i< frutas.length; i++) {
  console.log(frutas[i]);
} */

for (let i in frutas) {
  console.log(i);
}

const pessoa = {
  nome: "ruan",
  sobrenome: "victor",
  idade: "17",
};


 for (let chaves in pessoa) {
  console.log(chaves, pessoa[chaves]);
} 
