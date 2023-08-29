const fileSystem = require('fs')

function editUser (nome, curso, categoria) {
fileSystem.readFile('./usuario.json', { encoding: 'utf-8' }, (erro, dados) => {
  if (erro) {
    console.log('erro')
  } else {
    var conteudo = JSON.parse(dados)
    conteudo.nome = nome
    conteudo.curso = curso
    conteudo.categoria = categoria

    fileSystem.writeFile('./usuario.json', JSON.stringify(conteudo), (erro) => {
      if (erro) {
        console.log('erro')
      }
    })
  }
})
}
editUser('George', 'Nuxt', 'Front')