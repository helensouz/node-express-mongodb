import express from 'express';
import AutorController from '../controller/autoresController.js';

const router = express.Router();


router.get('/autores', AutorController.listarautores)
router.get('/autores/:id', AutorController.listarautoresPorId)
router.post("/autores", AutorController.cadastrarAutor)
router.put("/autores/:id", AutorController.atualizarAutor)
router.delete("/autores/:id", AutorController.deletarAutor)

export default router  