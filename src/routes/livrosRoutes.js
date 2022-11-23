import express from 'express';
import LivroController from '../controller/livroController.js';

const router = express.Router();


router.get('/livros', LivroController.listarlivros)
router.get('/livros/:id', LivroController.listarlivrosPorId)
router.post("/livros", LivroController.cadastrarLivro)
router.put("/livros/:id", LivroController.atualizarLivro)
router.delete("/livros/:id", LivroController.deletarLivro)

export default router  