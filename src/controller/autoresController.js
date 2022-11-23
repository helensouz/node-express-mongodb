import autores from "../models/Autor.js"


class AutorController {

    static listarautores = (req, res) => {
        autores.find((error, autores) => {
            res.status(200).json(autores)
    
        })
    }

    static listarautoresPorId = (req, res) => {
        const id = req.params.id;
        autores.findById(id, (err, autores) => {
            if(err){
                res.status(400).send({message : `${err.message} - ID do Autor nao localizado`})
            }else{
                res.status(200).send(autores)
            }
        })
    }

    static cadastrarAutor = (req, res) => {
        let Autor = new autores(req.body);

        Autor.save((err) => {
            if(err){
                return res.status(500).send({message: `${err.message} - falha ao cadastrar Autor`})
            }else {
                res.status(201).send(Autor.toJSON())
            }
        })
    }

    static atualizarAutor = (req, res) => {
        //precisar pegar o id e o conteudo

        const id = req.params.id //onde pegamos o params que é passado na rota

        autores.findByIdAndUpdate(id, {$set: req.body}), (err) => { //req.body é o conteudo
        if(!err){
            return res.status(200).send({message: 'Autor atualizado com sucesso!!'})

        }else{
            res.status(500).send({message: err.message})
        }
        
        }
    }

    static deletarAutor = (req, res) => {
        
        const id = req.params.id

        autores.findByIdAndDelete(id, (err) => { 
            if(!err){
                return res.status(200).send({message: 'Autor apagado com sucesso!!'})
    
            }else{
                res.status(500).send({message: err.message})
            }
            
            })
    }

}

export default AutorController