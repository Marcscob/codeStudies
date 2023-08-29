const fs = require('fs')

fs.writeFile('./marc.scob', 'new text insertion', (err) => {
  if (err) {
    console.log('erro ao salvar')
  }
})