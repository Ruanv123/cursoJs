// cancelar envio do formulário
const form = document.getElementById("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
});

function enviarMsg(msg) {
  const span = document.getElementById("span");
  span.innerHTML = msg;
}
 
function calculo() {
  let inptPeso = document.getElementById("peso");
  let inptAlt = document.getElementById("altura");
  let valorpeso = inptPeso.value;
  let valoralt = inptAlt.value;
  const msg = document.getElementById("span");

  if (valorpeso === "" && valoralt === "") {
    enviarMsg('<span class="text-red">!!!digite um valor válido</span>');
  } else {
    const imc = valorpeso / (valoralt * valoralt);
    enviarMsg(`<span class="text-green"> ${imc.toFixed(2)} </span>`);
  }
  //calculo do imc
}
s;
