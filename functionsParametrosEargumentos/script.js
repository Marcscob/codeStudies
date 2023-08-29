/*funções podem receber parâmetros e argumentos.
argumento é um valor inserido na invocação da função e parâmetro é uma variável que recebe o valor que foi inserido como argumento */

function sum() {
  //sem parâmetros
  return 1 + 1; // func estática
}

console.log(sum()); //sem argumentos

//como dinamizar a function?

function sum2(x, y) {
  //com parâmetros
  return x + y; // func din
}

console.log(sum2(4, 5)); //com argumentos
console.log(sum2(8, 5)); //com argumentos

/*parâmetros são variáveis que só funcionam no escopo da função; veja esse parâmetro x como uma variável local da função e esse parâmetro y como outra variável local da função, e dentro da função essas variáveis estão sendo usadas por que porque x armazenou esse um que eu inseri como primeiro argumento o parâmetro y armazenou esse um que eu inseri como segundo argumento */

//usando arrow function...e

const arr1 = (n1, n2) => n1 + n2;

const result1 = arr1(3, 9);
const result2 = arr1(7, 9);
const result3 = arr1(3, 7);

console.log(result1 + result2 + result3);

//quantos parâmetros uma função pode ter? quantos parâmetros você precisar porém e quanto menos melhor

//ex. de uma função
const dobrar = (x) => x * 2;

console.log(dobrar(6));
console.log(dobrar(4));

//o par é uma var q armazena qq valor

const x = (y) => y;

console.log(x({ prop: 1 })); // y ganhou um obj como valor

console.log(x([1, 5, 7])); // y ganhou um arr como valor

console.log(x(7 + 7)); // y ganhou uma expressão como valor

//lembrando: console ponto log pode receber vários argumentos desde que eles sejam separados por vírgula

console.log(1, "test", true, `temp string`);

//lembrando: função tradicional

function nome() {}

function sum(n1, n2) {
  return n1 + n2;
}

sum(3, 5);

//arrow:

//() => {}

//{} nem sempre precisa

//exemplos

function mostraString(nome) {
  return `meu nome é ${nome}`;
}
console.log(mostraString("Marc"));

//arrow version:

const mostraString2 = (nome) => `nome é ${nome}`; //uma só expressão simples = retorno implícito

console.log(mostraString2("Marc"));

//não cabe retorno implícito...

const sum3 = (a, b) => {
  const result5 = a + b; //declaração da variável
  return result5; //uso da variável
};
console.log(sum3(5, 8));

const obj2 = (par1, par2) => {
  return {
    prop1: par1,
    prop2: par2,
  };
};
console.log(obj2(2, 9));

//com retorno implícito de objetos

const obj3 = (par1, par2) => ({
  prop1: par1,
  prop2: par2,
});

console.log(obj3(5, 9));

//arrow function with parameter, argument, return and template string

const nickName = (nick) => {
  return nick;
};

console.log(`hi ${nickName("Bia")}`);

//arrow func calling another function by for loop

const dices = () => {
  let roll = Math.floor(Math.random() * 6) + 1;
  console.log(`rolled: ${roll}`);
};

const rollDice = (numRoll) => {
  for (i = 0; i < numRoll; i++) {
    dices();
  }
};

rollDice(5);

//calling function on devtools
function sum(num1, num2, num3, num4) {
  console.log(num1 + num2 + num3 + num4);
}

//params and args returning a division
const divide = (x, y) => {
  return x / y;
};
console.log(divide(10, 2));

// code after is not processed

const mult = (x, y) => {
  console.log(`I can run`);
  return x * y;
  console.log("I can't run");
};

console.log(mult(2, 5));

//returning an if statement

const isYellow = (color) => {
  if (color.toLowerCase() == "yellow") {
    return `the color is right, it's ${color}`;
  } else {
    return `try again`;
  }
};
console.log(isYellow("yellow"));

//refactoring; returns true and false in one line
function isPurple(color) {
  return color.toLowerCase() === "purple";
}

//looking inside array
//the function containsPurple accepts an array called arr
const containsPurple = (arr) => {
  for (color of arr) {
    if (color === "purple" || color === "red") {
      return true;
    } //if false was here would be the end of function at first ekement false in array
  }
  return false; //here false only run if all elements in array is tested
};
console.log(containsPurple(["blue", "yellow", "red"]));

//practice

const isValidPassword = (pass, user) => {
  if (pass.length < 8) {
    return `false one`;
  }
  if (pass.indexOf(" ") !== -1) {
    return `false two`;
  }
  if (pass.indexOf(user) !== -1) {
    return `false three`;
  }
  return true;
};
console.log(isValidPassword("marcsc", "marcsc"));

//refactoring
const isValidPassword2 = (pass, user) => {
  if (
    pass.length < 8 ||
    pass.indexOf(" ") !== -1 ||
    pass.indexOf(user) !== -1
  ) {
    return false;
  }
  return true;
};
console.log(isValidPassword2("12345678", "marcscob"));

//another aprouch
const isValidPassword3 = (pass, user) => {
  const char = pass.length < 8;
  const space = pass.indexOf(" ") !== -1;
  const userChar = pass.indexOf(user) !== -1;
  if (char || space || userChar) return false;
  return true;
};
console.log(isValidPassword3("12345678", "test"));

//same result by denieing
const isValidPassword4 = (pass, user) => {
  const char = pass.length < 8;
  const space = pass.indexOf(" ") !== -1;
  const userChar = pass.indexOf(user) !== -1;
  if (!char && !space && !userChar) return true;
  return false;
};
console.log(isValidPassword4("12345678", "test"));

//even more refined
const isValidPassword5 = (pass, user) => {
  const char = pass.length < 8;
  const space = pass.indexOf(" ") !== -1;
  const userChar = pass.indexOf(user) !== -1;
  return !char && !space && !userChar
};
console.log(isValidPassword5("12345678", "test"));

//practice
//return the avarage of the numbers in any given array
const avg = (arr) => {
  let total = 0;
  for (let num of arr) {
    total += num;
  }
  let res = total / arr.length;
  return res
}
console.log(avg([0, 50]))
console.log(avg([150, 150, 150, 150]));

//practice --- pangram
