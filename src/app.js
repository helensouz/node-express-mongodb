import express  from "express";
import db from "./config/dbconect.js"
import livros from "./models/Livro.js"

db.on("error", console.log.bind(console, 'Erro de conexão'))
db.once("open", () => {
  console.log('conexão com o banco feita com sucesso')
})

const app = express(); 


app.use(express.json())

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

app.post('/seriesFavoritas', (req, res) => {
    seriesFavoritas.push(req.body)
    res.status(200).send('Serie favorita adicionada com sucesso')
})

app.put('/seriesFavoritas/:id', (req, res) => {
    let index = buscarSerie(req.params.id)
    seriesFavoritas[index].titulo = req.body.titulo
    res.send(seriesFavoritas)
})





app.get('/', (req, res) => {
    livros.find((error, livros) => {
        res.status(200).send('Curso de node')

    } )
})

app.get('/livros', (req, res) => {
    livros.find((error, livros) => {
        res.status(200).json(livros)

    })
})

app.get('/livros/:id', (req, res) => {
    livros[index].titulo = req.body.titulo
    res.json(livros[index])
 })

app.post('/livros', (req, res) => {
    livros.push(req.body)
    res.status(200).send('livro foi cadastrado com sucesso')
})


app.put('/livros/:id', (req, res) => {
   let index = buscaLivro(req.params.id)
   livros[index].titulo = req.body.titulo
   res.json(livros)
})

app.delete('/livros/:id', (req, res) => {
    let {id} = req.params;
   let index = buscaLivro(id)
   livros.splice(index, 1)
    res.json(`Livro ${id} removido com sucesso`)
 })

function buscaLivro(id){
    return livros.findIndex(livro => livro.id == id)
}

function buscarSerie(id){
    return seriesFavoritas.findIndex(favoritas => favorites.id == id)
}


 export default app;