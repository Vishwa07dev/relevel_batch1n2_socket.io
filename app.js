const express = require("express");
const app = express();
const http = require('http').Server(app); // Binding express to http server

//Binding http server to the socket.io
const io = require("socket.io")(http);

/**
 * socketIo needs to be binded to the http server
 */

/**
 * I would like to create a two way communication between
 * Client ( Browser ) and the Server
 * 
 * socket.io
 */
app.get("/hello", (req, res)=>{
    console.log(__dirname + "/views/index.html");
    res.sendFile(__dirname + "/views/index.html");
})

/**
 * Types of standard events :
 * 
 * 1. Server side
 *   
 * a. Connect
 * b. Message
 * c. Disconnect
 * d. Reconnect
 * e. Ping
 * f. Join
 * g. Leave
 * 
 * 
 * 2.Clint Side :
 * 
 *  a. connect
 *  b. connect_error
 *  c. connect_timeout
 *  d. reconnect
 */

/**
 * Writing code to react when some client connects
 */
io.on('connection', (socket)=>{
    console.log('A user is connected to the server');

    /**
     * Let's send message to the client after 5 seconds of connection
     * 
     */
    setTimeout(()=>{
       socket.send("Sent a message from server after 5 seconds ");
    },5000);

    socket.on('disconnect', ()=>{
        console.log("User is disconnected");
    })
})



/**
 * Stating the http server
 */
http.listen(8000,()=>{
    console.log("App started");
})