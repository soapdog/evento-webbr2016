var tessel = require('tessel'); // import tessel
var led = tessel.port.A.pin[0]; // select pin 2 on port A
var sensor_luz = tessel.port.A.pin[7]


function le_luz(callback) {
  sensor_luz.analogRead(function(error, value) {
    // print the pin value to the console
    var luz = Math.round(value * 100)
    callback(luz);
  });
}

function liga_luz() {
  led.output(1)
}

function desliga_luz() {
  led.output(0)
}

function luz_emergencia() {
  le_luz(function(luz) {
      if (luz > 50) {
        console.log("ta claro...")
        desliga_luz()
      } else {
        console.log("Muito escuro!!! Ligue a luz!!!")
        liga_luz()
      }
  })
}


setInterval(luz_emergencia, 1000);
