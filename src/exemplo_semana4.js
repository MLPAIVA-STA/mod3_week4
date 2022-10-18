const Pessoa_aqui = require ('./classPessoa');

const pessoa = new Pessoa_aqui('Marcio', 'Paiva', 43); 

console.log(pessoa.nome); // testeNome 
console.log(pessoa.sobrenome); // testeSobrenome
console.log(pessoa.age); // testeIdade 

const pessoa2 = new Pessoa_aqui('Joaquim', 'Jose', 77); 

console.log(pessoa2.nome); // testeNome 
console.log(pessoa2.sobrenome); // testeSobrenome
console.log(pessoa2.age); // testeIdade 

console.log("======================");

 
 Object.keys(pessoa).forEach(key => { // cria indice chamado key para os iens do objeto
    console.log(key, pessoa[key]);    // exibe a lista de conteúdo do objeto em sequencia
  });

  Object.keys(pessoa2).forEach(key => { // cria indice chamado key para os iens do objeto
    console.log(key, pessoa2[key]);    // exibe a lista de conteúdo do objeto em sequencia
  });
