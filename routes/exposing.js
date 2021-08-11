const { Router } = require('express');
const { cargarArchivo } = require('../controllers/exposing');
const { validarArchivoSubir } = require('../middlewares');


const router = Router();


router.post('/', validarArchivoSubir, cargarArchivo);


module.exports = router;