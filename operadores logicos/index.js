/* 
&& -> and -> E
|| -> or -> ou  -- se tiver true a expressao sempre retorna verdadeiro
! -> not -> nao
*/

const expressao = true && true && true && true;

const express2 = true || false;

const usuario = "marcelo";
const senha = "senha";

const validacao = usuario === "marcelo" && senha === "senha1";

console.log(validacao);
