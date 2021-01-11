# Simple-Mqtt-Server

This is a very simple web server for a browser side client can access a mqtt server
without using WebSocket

The mechanism is to create a proxy server to forward the message between the MQTT broker and the browser client.
A express server as a client to subscribe a MQTT topic, then use WebSocket to transmit any message published on that topic.

## Usage
run 
```bash
npm install
```
then run 
```bash
npm run start
```
to start the server

### If you are using `yarn`
run 
```bash
yarn install
```
then run 
```bash
yarn start
```
to start the server
