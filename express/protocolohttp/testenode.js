const sequelize = require('sequelize');

const sequelize2 = new sequelize('testenode', 'root', '', {
    host: "localhost",
    dialect: 'mysql'
});

// Criando a estrutura da tabela do banco de dados via sequelize
const Postagem = sequelize2.define('postagens', {
    titulo: {
        type: sequelize.STRING
    },
    conteudo: {
        type: sequelize.TEXT
    }
});

// Passando dados para a tabela de postagens

/* Postagem.create({
    titulo: "Promocao dia das maes",
    conteudo: "No mes do dia das maes todas as lojas terao 50% de desconto nos esmaltes"
});

*/

/* Executando a criação da tabela só precisa ser feito uma vez
Postagem.sync({force:true});
*/

// // Criando a estrutura da tabela do banco de dados via sequelize
const Usuario = sequelize2.define('usuarios', {
    nome: {
        type: sequelize.STRING
    },
    sobrenome: {
        type: sequelize.STRING
    },
    idade: {
        type: sequelize.INTEGER
    },
    email: {
        type: sequelize.STRING
    }
});

/* Passando dados para a tabela de usuários

Usuario.create({
    nome: "Julia",
    sobrenome: "Lima",
    idade: "21",
    email: "juju@ju.com.br"
 });

*/

/* Uma vez criada a tabela, podemos comentar essa linha
 Usuario.sync({force:true});
 */

/* Teste de Conexão com o Banco de Dados
sequelize2.authenticate().then(function(){
    console.log("Conectado com sucesso!");
}).catch(function(erro){
    console.log("Falha ao se conectar" + erro);
});
*/