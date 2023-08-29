const fs = require('fs') //file-system

let conteudo;

// reading file
fs.readFile('./marc.scob', {encoding: 'utf-8'}, (erro, dados) => {
  
  if (erro) {
    console.log('erro')
  } else {
    conteudo = dados
  }
})