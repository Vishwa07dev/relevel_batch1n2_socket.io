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


var clients = 0 ; // This will keep track of the number of clients
/**
 * Writing code to broadcast messages to all the users
 */
io.on('connection', (socket)=>{
    console.log('A user is connected to the server');
    clients++;
    
    /**
     * Every time a client joins, let's broadcast the total 
     * number of clients to all the clients
     */
  
    io.sockets.emit('broadcast', {
        description : clients + 'clients connected'
    });
    
    socket.on('disconnect', ()=>{
        console.log("User is disconnected");
        clients--;
        io.sockets.emit('broadcast', {
            description : clients + 'clients connected'
        });

    })
})



/**
 * Stating the http server
 */
http.listen(8000,()=>{
    console.log("App started");
})