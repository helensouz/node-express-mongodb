import express  from "express";
import db from "./config/dbconect.js"
import livros from "./models/Livro.js"
import routes from "./routes/index.js";
import router from "./routes/index.js"
db.on("error", console.log.bind(console, 'Erro de conexão'))
db.once("open", () => {
  console.log('conexão com o banco feita com sucesso')
})

const app = express(); 


app.use(express.json())

routes(app)

// const livros = [
//     {id: 1, titulo: 'O senhor dos aneis'},
//     {id: 2, titulo: 'O Hobbit'}
// ]

const seriesFavoritas = [
    {id: 1, titulo: 'Stranger things'},
    {id: 2, titulo: 'Breaking bad'},
    {id: 3, titulo: 'the Walking Dead'},
    {id: 4, titulo: 'The Good Place'},
]

app.get('/seriesFavoritas', (req, res) => {
    res.status(200).json(seriesFavoritas)
})



app.put('/seriesFavoritas/:id', (req, res) => {
    let index = buscarSerie(req.params.id)
    seriesFavoritas[index].titulo = req.body.titulo
    res.send(seriesFavoritas)
})

















function buscarSerie(id){
    return seriesFavoritas.findIndex(favoritas => favorites.id == id)
}


 export default app;