var express = require('express');

const app = express();

// Porta do protocolo http
app.listen(8081, function(){
    console.log("O servidor está rodando no endereço http://localhost:8081");
});

// Chamando a biblioteca handlebars
const handlebars = require('express-handlebars');

const sequelize = require('sequelize');

const sequelize2 = new sequelize('testenode', 'root', '', {
    host: "localhost",
    dialect: 'mysql'
});

// Configurando o handlebars e o template engine
app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
app.set('view.engine', 'handlebars');

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
