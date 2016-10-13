// Importar a Interface para o Hardware
var tessel = require('tessel');

// Ligar um LED antes do loop.
var led = tessel.port.A.pin[5]; // select pin 2 on port A

// Piscar!!!
setInterval(function () {
  led.toggle();
}, 300);

console.log("Pisca! (Aperte CTRL + C para interromper)");
