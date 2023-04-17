const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const { transporter } = require("./config/mailer")
const cors = require("cors")
require("dotenv").config();

const server = express();

server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());
server.use(morgan("dev"));
server.use(cors())

server.get("/", (req, res) => {
    console.log("ready")
    res.send("ok")
})

server.post("/sendEmail", async (req, res) => {
    
    try {
        const {nombre} = req.body
        await transporter.sendMail({
            from: `"Hola, ${nombre} está a la espera de su nuevo logo. 👀" <sergio@whateverworks.design>"`,
            to: ["jejog50@gmail.com", "sergio@whateverworks.design", "mauricio.gaitan@whateverworks.design", "laura.gutierrez@whateverworks.design", "angie.castillo@whateverworks.design", "hello@whateverworks.design"],
            subject: "¡Hola, equipo! ¡Tenemos un nuevo cliente a la espera de su nuevo logo! 😋",
            html: `<div>Mira el <a href="https://docs.google.com/spreadsheets/d/14sWd8VUsQKuvGsnEAyCSSJTsWBYAXnrQyx5od5jPqRA/edit#gid=0">Sheets</a> para comenzar a crear el logo. 👨‍🚀</div>`
        })
        res.status(200).json("Email enviado!")
    } catch (err) {
        console.log(err)
    }
})

module.exports = server;