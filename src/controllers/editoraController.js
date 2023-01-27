import editoras from "../models/Editora.js";

export default class editoraController {
    static listarEditoras = (req, res) => {
        editoras.find((err, editoras) => {
            res.status(200).json(editoras);
        });
    };

    static listarEditoraPorId = (req, res) => {
        const id = req.params.id;
        editoras.find(id, (err, editora) => {
            if(err){
                res.status(404).send({message: `${err.message} - Editora não localizada`});
            }else{
                res.status(200).send(editora);
            };
        });
    };

    static atualizarEditora = (req, res) => {
        const id = req.params.id;
        editoras.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err){
                res.status(200).send({message: 'Editora atualizada com sucesso'});
            }else{
                res.status(500).send({message: err.message})
            }
        })
    };

    static cadastrarEditora = (req, res) => {
        let editora = new editoras(req.body);
        editora.save((err) => {
            if(err){
                res.status(500).send({message: `${err.message} - Falha ao cadastrar Editora`})
            }else{
                res.status(201).send(editora.toJSON())
            }
        })
    };

    static excluirEditora = (req, res) => {
        const id = req.params.id;
        editoras.findByIdAndDelete(id, (err, editora) => {
            if(!err){
                res.status(200).send({message: 'Editora apagado com sucesso'});
            }else{
                res.status(404).send({message: `${err.message} - ID da Editora não localizado`})
            }
        })
    };
};