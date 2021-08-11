const path = require('path');


const { response } = require("express");
const { recibirTD } = require("../helpers");

const cargarArchivo = async(req, res = response) => {

    try {

        //Para subir textos
        //const nombre = await subirArchivo(req.files, ['txt', 'md'], 'textos');

        //Extensiones permitidas por defecto: Imágenes
        const nombre = await recibirTD(req.files, undefined, 'Things');

        res.json({ nombre });
    } catch (msg) {
        res.status(400).json({ msg });
    }
}






module.exports = {
    cargarArchivo
}