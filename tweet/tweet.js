

// Pega o módulo do Twitter
var twitter = require('twitter');

var twitterHandle = '@tesselproject';
// Abaixo está o status que vamos postar
var status = 'Olá ' + twitterHandle + '. estamos na #Webbr2016 e vamos falar do #Tessel 2.';

// credenciais para a conta fake @TesselTweet
// Se quiser personalizar para a sua conta terá que colocar os seus dados abaixo
var twit = new twitter({
  consumer_key: 'O7oc0pvsZn4xjgcuHuYdX4FaC',
  consumer_secret: 'iJYuHFz2sD46Nvk3mcwzX8uih14aEAMgVWdWoR59nx8v6Zl7ZX',
  access_token_key: '2529232909-luARGU89K4CKFMvfzBjCgG6ubefzDkdDWkSB85i',
  access_token_secret: 'GXQfuzvGdjLEs3t1HEYfhQ9x9bdBcSBVXjBkbRgwYlOE0'
});

// Mandar um tweet!
twit.post('statuses/update', {status: status}, function(error, tweet, response){
  if (error) {
    console.log('error sending tweet:', error);
  } else {
    console.log('Successfully tweeted! Tweet text:', tweet.text);
  }
});

