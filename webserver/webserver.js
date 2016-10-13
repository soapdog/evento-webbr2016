

  // As dependencias
  var tessel = require('tessel');
  var http = require('http');
  var fs = require('fs');
  var url = require('url');

  var server = http.createServer(function (request, response) {
    // Quebra a url pra ficar mais fácil
    var urlParts = url.parse(request.url, true);

    console.log("Recebi um request!")

    // Um regex pra verificar se é para mudar LED
    var ledRegex = /leds/;

    if (urlParts.pathname.match(ledRegex)) {
      // Se for para mudar LED chama: toggleLED
      toggleLED(urlParts.pathname, request, response);
    } else {
      // Qualquer outro request: showIndex
      showIndex(urlParts.pathname, request, response);
    }
  });

  server.listen(8080);
  console.log('Server running at http://192.168.1.101:8080/');

  // Mostrando o index.html
  function showIndex (url, request, response) {
    // Criando o header
    response.writeHead(200, {"Content-Type": "text/html"});

    // lendo o index.html
    fs.readFile(__dirname + '/index.html', function (err, content) {
      // BOOM!
      if (err) {
        throw err;
      }

      // Enviando o conteúdo do arquivo
      response.end(content);
    });
  }

  // Liga um LED específico!
  function toggleLED (url, request, response) {
    // Um regex pra achar qual LED temos que mudar
    var indexRegex = /(\d)$/;

    // Pega o número (cuidado que retorna um array)
    var result = indexRegex.exec(url);

    // Pega o número de dentro do array
    var index = result[1];

    // Acha o LED correto
    var led = tessel.led[index];

    // Muda o LED e chama o callback depois
    led.toggle(function (err) {
      if (err) {
        // Deu ruim, manda o erro 500 pro cliente
        console.log(err);
        response.writeHead(500, {"Content-Type": "application/json"});
        response.end(JSON.stringify({error: err}));
      } else {
        // funcionou!!! led.isOn tem como está o LED.
        response.writeHead(200, {"Content-Type": "application/json"});
        response.end(JSON.stringify({on: led.isOn}));
      }
    });
  }

