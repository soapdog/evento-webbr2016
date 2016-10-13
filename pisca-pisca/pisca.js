// Importar a Interface para o Hardware
var tessel = require('tessel');

// Ligar um LED antes do loop.
tessel.led[2].on();

// Piscar!!!
setInterval(function () {
  tessel.led[2].toggle();
  tessel.led[3].toggle();
}, 100);

console.log("Pisca! (Aperte CTRL + C para interromper)");
