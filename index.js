const express = require("express");
const { ExpressPeerServer } = require("peer");

const app = express();
const server = require("http").createServer(app);

app.use(express.static("public"));

// Configurar PeerJS server
const peerServer = ExpressPeerServer(server, {
  path: "/myapp"
});
app.use("/peerjs", peerServer);

server.listen(process.env.PORT || 9000, () => {
  console.log("PeerJS server corriendo en el puerto 9000");
});
