//array = values list
//ex. market products list
const list = ['arroz', 'maçã', 'feijão']
//accessing array items
console.log(list[2])//index zero-based
//ou...
const listPic = list[1]
console.log(listPic)
//ou...
console.log(list[1 + 1])
//reassigning array items
list[0] = 'uva'
//adding item
list[3] = 'banana'
console.log(list)
const arrEmpty = []
arrEmpty[0] = 'Fender'
console.log(arrEmpty)
//array or object?
//object - use to grou caracteristics of something or someone
//array is for lists
//nested arrays or multidimentional array
const trimestres = [
  ['jan', 'fev', 'mar'],
  ['abr', 'mai', 'jun'],
  ['jul', 'ago', 'set']
]
console.log(trimestres[1][0])
console.log(trimestres[2][2][0])
trimestres[3] = ['out', 'nov', 'dez']
console.log(trimestres)

//array inside object
const pokemon = {
  nome: 'Charizard',
  tipos: ['fogo', 'voador']
}

console.log(pokemon.tipos[1])
//or brackets notation
console.log(pokemon['tipos'][1])



