var tessel = require('tessel'); // Import tessel

// Inicializa os pinos
var rele = tessel.port.B.pin[5]; 
var botao = tessel.port.A.pin[6];


// Desliga o LED
rele.output(0);

// Registra um evento. Rise == liga o LED, Fall == desliga o LED.
botao.on('rise', function() {
  console.log("LIGOU!")
  rele.output(0);
});

botao.on('fall', function() {
  console.log("DESLIGOU!")
  rele.output(1);
});