import autores from "../models/Autor.js";

export default class AutorController{

    static listarAutores = (req, res) => {
        autores.find((err, autores) => {
            res.status(200).json(autores)
        });
    }
    
    static listarAutorPorID = (req, res) => {
        const id = req.params.id;
        autores.findById(id, (err, autores) => {
            if(!err){
                res.status(200).send(autores);
            }else{
                res.status(404).send({message: `${err.message} - ID do Autor não localizado`})
            }
        })
    }

    static cadastrarAutor = (req, res) => {
        let autor = new autores(req.body);
        autor.save((err) => {
            if(err){
                res.status(500).send({message: `${err.message} - falha ao cadastrar Autor`})
            }else{
                res.status(201).send(autor.toJSON())
            }
        })
    }

    static atualizarAutor = (req, res) => {
        const id = req.params.id;
        autores.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err){
                res.status(200).send({message: 'Autor atualizado com sucesso'});
            }else{
                res.status(500).send({message: err.message})
            }
        })
    }

    static excluirAutor = (req, res) => {
        const id = req.params.id;
        autores.findByIdAndDelete(id, (err, autores) => {
            if(!err){
                res.status(200).send({message: 'Autor apagado com sucesso'});
            }else{
                res.status(404).send({message: `${err.message} - ID do Autor não localizado`})
            }
        })
    }
};