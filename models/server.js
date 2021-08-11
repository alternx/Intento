const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');



class Server {


    constructor() {

        this.app = express();
        this.port = process.env.PORT;

        this.paths = {
            exposing: '/exposing'

        };


        //Middleware
        this.middlewares();

        //Rutas de mi aplicación
        this.routes();
    }


    middlewares() {

        //CORS
        this.app.use(cors());

        //Lectura y parseo del Body
        this.app.use(express.json());

        //Directorio Público
        //this.app.use(express.static('public'));

        //Fileupload - Carga de archivos
        this.app.use(fileUpload({
            useTempFiles: true,
            tempFileDir: '/tmp/',
            createParentPath: true
        }));

    }



    routes() {

        //Carga de Archivos
        this.app.use(this.paths.exposing, require('../routes/exposing'));

    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);
        });
    }

}


module.exports = Server;