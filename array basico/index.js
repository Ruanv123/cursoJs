
//*                 0           1         2           3                  
let alunos =  ['Rafael', 'carlos', 'leticia', 'Vinicius'];

//trocar o valor de acordo com a posição [] lembrando q sempre comeca do 0
alunos[1] = 'cristiano seabra';
alunos[4] = 'juan';


// * para saber o tamanho do array
console.log(alunos.length);


// * adicionar um item no array
alunos.push('otavio')

// * adciona um sempre em primeiro
alunos.unshift('dudzin')


//* remove o ultimo elemento
alunos.pop();

//* e possivel salvar o valor q vai ser removido em uma variavel
const removido =  alunos.pop();

//* remove o primeiro item do array
alunos.shift(); // pode ser salvo em variavel tambem


//* posso deletar um valor e ele sera vazio
delete alunos[1];

// * consigo fatiar o array e ver os elementos  0 e 1
console.log(alunos.slice(0, 2));  // o 2 nao vai ser o elemento 2 e sim o 1

//* se eu fizer isso o array vira uma variavel de number normal
alunos = 123; 
console.log(typeof alunos);

//instancea pra ver se alunos é ou nao um array
console.log(alunos instanceof Array);

console.log(alunos);



/* 

console.log(alunos[2]) 

*/