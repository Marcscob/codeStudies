const serie = {
  nome: 'Friends',
  temporadas: '15'
}

//new values to properties
serie.temporadas = 20
serie.nome = 'Friends3'

const interpolate = `a série ${serie.nome} tem ${serie.temporadas} temporadas`

console.log(interpolate)

//adding new properties to an object
serie.leadActor = 'Jenifer Aninston'
//if a propertie exists in the object, it will be updated; if not, will be created
const interpolate2 = `a série ${serie.nome} protagonizada por ${serie.leadActor} tem ${serie.temporadas} temporadas `;

console.log(interpolate2);

//creating an empty object
const band1 = { }
//adding properties
band1.name = 'Beatles';
band1.style = 'Rock'
console.log(band1)

//const or object?

const name = 'John'
const height = '1,85'
const weight = '85kg'

//those are aspects of the same person, so could be an object

const person1 = {
    name : 'John',
    height : '1,85',
    weight : '85kg'
}



