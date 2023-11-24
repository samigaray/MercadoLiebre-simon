// Requerimos express y lo ejecutamos para tener disponibles todos los metodos que vamos a precisar
const express = require("express");
const app = express();

// Modulo nativo para manejar las rutas de los archivos
const path = require("path");

// Usando recursos estáticos.
const publicpath = path.resolve(__dirname, "./public");
app.use(express.static(publicpath));

// Ponemos a escuchar el servidor
const port = process.env.PORT || 3030;
app.listen(port, () => {
    console.log("Servidor corriendo en http://localhost:${port}")
});

// Definimos las rutas a los distintos pedidos que nuestro sitio sabe responder
app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/home.html"))
})
app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/resgistrate.html"))
})
