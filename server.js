var express = require('express');
var mqtt = require('mqtt');

var app = express();
const port = 3333



const WebSocket = require('ws');

app.use('/static', express.static('public'));
// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.send('hello world');
});

app.get('/home', (req, res) => {

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

const wss = new WebSocket.Server({ port: 8899 });

var client = mqtt.connect('mqtt://52.192.126.224', {port:1883});

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });

  ws.send('something');

  client.on('message', (topic, message) => {
	console.log( message.toString() );
	ws.send(message.toString() );
  })
});

client.on('connect', () =>{
	console.log('Mqtt connected!');
	client.subscribe('IOT20');
})

