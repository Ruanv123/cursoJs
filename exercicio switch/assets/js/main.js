const valueTxt = document.getElementById("value");

const data = new Date();

const diaDaSemana = data.getDay();

const didaMes = data.ge;

const mes = data.getMonth();

const year = data.getFullYear();

const hour = data.getHours();

const minutes = data.getMinutes();

function getDayWeek() {
  let diaSemana;
  switch (diaDaSemana) {
    case 0:
      diaSemana = "doming";
      return diaSemana;
    case 1:
      diaSemana = "Segunda-feira";
      return diaSemana;
    case 2:
      diaSemana = "terca-feira";
      return diaSemana;
    case 3:
      diaSemana = "Quarta-feira";
      return diaSemana;
    case 4:
      diaSemana = "Quinta-feira";
      return diaSemana;
    case 5:
      diaSemana = "Sexta-feira";
      return diaSemana;
    case 6:
      diaSemana = "Sábado";
      return diaSemana;
  }
}

function getMonth() {
  let Monthdate;
  switch (mes) {
    case 0:
      Monthdate = "Janeiro";
      return Monthdate;
    case 1:
      Monthdate = "Fevereiro";
      return Monthdate;
    case 2:
      Monthdate = "março";
      return Monthdate;
    case 3:
      Monthdate = "Abril";
      return Monthdate;
    case 4:
      Monthdate = "maio";
      return Monthdate;
    case 5:
      Monthdate = "junho";
      return Monthdate;
    case 6:
      Monthdate = "julho";
      return Monthdate;
    case 7:
      Monthdate = "agosto";
      return Monthdate;
    case 8:
      Monthdate = "Setembro";
      return Monthdate;
    case 9:
      Monthdate = "outubro";
      return Monthdate;
    case 10:
      Monthdate = "novembro";
      return Monthdate;
    case 11:
      Monthdate = "dezembro";
      return Monthdate;
  }
}

function enviarMsg(msg) {
  const span = document.getElementById("span");
  span.innerText = msg;
}

const funcDay = getDayWeek(diaDaSemana);
const funcMonth = getMonth(mes);

enviarMsg(
  funcDay +
    "," +
    diaDaSemana +
    " de " +
    funcMonth +
    " de " +



    
    year +
    " " +
    hour +
    ":" +
    minutes
);

console.log(funcDay, diaDaSemana, mes, funcMonth, year + hour, ":", minutes);
