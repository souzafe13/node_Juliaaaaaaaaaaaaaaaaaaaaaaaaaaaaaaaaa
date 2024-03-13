// Biblioteca express
var express = require('express');

const app = express();

// Chamando a biblioteca handlebars
const handlebars = require('express-handlebars');

// Chamando a biblioteca body-parser
const bodyParser = require('body-parser');

// Requisição da minha tabela
const Post = require('./post');

// Configurando o handlebars e o template engine
app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
app.set('view.engine', 'handlebars');

// Configurando a body-parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Criar rota
app.get('/cad', function(req, res){
    res.render('formulario.handlebars');
});

// Uma nova rota post
app.post('/add', function(req, res){
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    })
    .then(function(){
        res.send("Post criado com sucesso!")
    })
    .catch(function(erro){
        res.send("Houve um erro: " + erro)
    })
});

// Porta do protocolo http
app.listen(8081, function(){
    console.log("O servidor está rodando no endereço http://localhost:8081");
});

/*
// Rota chamando o html
app.get("/", function(req, res){
    res.sendFile(__dirname + "/html/index.html");
});

// Rota 2 chamando o html - Sobre
app.get("/sobre", function(req, res){
    res.sendFile(__dirname + "/html/sobre.html");
});

// Rota 3
app.get("/produtos", function(req, res){
    res.send("Confira os nossos produtos");
});

// Rota com parâmetros
app.get("/ola/:nome/:cargo/:idade", function(req, res){
    res.send("<h1>Ola " + req.params.nome + "</h1>" +
    "<br><h2> Seu cargo é: " + req.params.cargo +
    "<br> Sua idade é: " + req.params.idade + "</h2>"
);
}); */
