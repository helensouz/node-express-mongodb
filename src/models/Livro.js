import { Schema } from "mongoose"
import mongoose from "mongoose"
import livrosRoutes from "../routes/livrosRoutes.js"

const livroSchema = new mongoose.Schema(
    { 
        id: { type: String},
        titulo: {type: String, required: true},
        autor: {type: mongoose.Schema.Types.ObjectId, ref: "autores" , required: true},
        // mongoose.Schema.Types.ObjectId, ref: "autores" 
        editora: {type: String, required: true},
        numeroPaginas: {type: Number}
    }
   
)

const livros = mongoose.model('livros', livroSchema);
export default livros