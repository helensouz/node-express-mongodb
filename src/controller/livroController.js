import livros from "../models/Livro.js"


class LivroController {

    static listarlivros = (req, res) => {
        livros.find((error, livros) => {
            res.status(200).json(livros)
    
        })
    }

    static listarlivrosPorId = (req, res) => {
        const id = req.params.id;
        livros.findById(id, (err, livros) => {
            if(err){
                res.status(400).send({message : `${err.message} - ID do livro nao localizado`})
            }else{
                res.status(200).send(livros)
            }
        })
    }

    static cadastrarLivro = (req, res) => {
        let livro = new livros(req.body);

        livro.save((err) => {
            if(err){
                return res.status(500).send({message: `${err.message} - falha ao cadastrar livro`})
            }else {
                res.status(201).send(livro.toJSON())
            }
        })
    }

    static atualizarLivro = (req, res) => {
        //precisar pegar o id e o conteudo

        const id = req.params.id //onde pegamos o params que é passado na rota

        livros.findByIdAndUpdate(id, {$set: req.body}), (err) => { //req.body é o conteudo
        if(!err){
            return res.status(200).send({message: 'Livro atualizado com sucesso!!'})

        }else{
            res.status(500).send({message: err.message})
        }
        
        }
    }

    static deletarLivro = (req, res) => {
        
        const id = req.params.id

        livros.findByIdAndDelete(id, (err) => { 
            if(!err){
                return res.status(200).send({message: 'Livro apagado com sucesso!!'})
    
            }else{
                res.status(500).send({message: err.message})
            }
            
            })
    }

}

export default LivroController