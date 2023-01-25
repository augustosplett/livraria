import express from "express";
import db from "./config/dbConnect.js";
import livros from "./models/Livro.js";
import routes from "./routes/index.js";

db.on("error", console.log.bind(console, 'Erro de conexão'));
db.once("open", () => {
    console.log('conexão com o banco realizada com sucesso')
});

const app = express();

app.use(express.json());

routes(app);


app.get('/livros/:id', (req, res) => {
    const index = buscaLivro(req.params.id);
    res.status(200).json(livros[index]);
});

app.post('/livros', (req, res) => {
    // livros.create(req.body)
    // livros.push(req.body);
    res.status(201).send('Criado com sucesso');
});

app.put('/livros/:id', (req, res) => {
    const index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(200).json(livros);
});

app.delete('/livros/:id', (req, res) => {
    let {id} = req.params;
    const index = buscaLivro(id);
    livros.splice(index, 1);
    res.status(200).send(`livro ${id} removido com sucesso`);
});

function buscaLivro(id){
    return livros.findIndex( livro => livro.id == id)
};

export default app;