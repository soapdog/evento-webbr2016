var tessel = require('tessel'); // Import tessel

// Inicializa os pinos
var red = tessel.port.A.pin[5]; 
var botao = tessel.port.A.pin[2];

// Desliga o LED
red.output(0);

// Registra um evento. Rise == liga o LED, Fall == desliga o LED.
botao.on('rise', function() {
  console.log("RED!")
  red.output(1);
});

botao.on('fall', function() {
  console.log("NOT RED!")
  red.output(0);
});