// (condicao) ? 'valor para verdadeiro' : 'valor para false'

const pontuacaoUsuario = 999;

/* if (pontuacaoUsuario >= 1000) {
  console.log("usuario vip");
} else {
  console.log("usuario normal");
} */

//isso é a mesma coisa q fazer um if e else sendo o ? o if e o : else
const nivelUsuario = pontuacaoUsuario >= 1000 ? "usuario vip" : "usuario comum";

console.log(nivelUsuario);

const corUsuario = null;
const corPadrao = corUsuario || "red";

console.log(corPadrao);
