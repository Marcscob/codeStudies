const fileSystem = require('fs') //or...import fileSystem from "fs";
const { cursorTo } = require('readline')

fileSystem.readFile('./usuario.json', { encoding: 'utf-8' }, (erro, dados) => {
  if (erro) {
    console.log('erro')
  } else {
    var conteudo = JSON.parse(dados) //converts json text into js object so I can manipulate it
    conteudo.nome = 'Marcelo Scobino'
    conteudo.curso = 'Vue'
    conteudo.categoria = 'Vue js'
    //the data from original file is not modified 'till here
    //but it's about to change
    fileSystem.writeFile('./usuario.json', JSON.stringify(conteudo), (erro) => {
      if (erro) {
        console.log('erro')
      }
    })//strinfy() converts object to text
  }
})