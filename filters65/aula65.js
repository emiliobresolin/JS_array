// Filter -> Sempre retornar um array, com a mesma quantidade de elementos
// ou menos.

// Retorne os números maiores que 10
//               0  1   2   3  4 .....
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

function callBackFilter(valor, index, array){ //this is the old way without arrow functions '=>' dont do it!
    if (valor > 10)
    {
        return true;
    }
    else
    {
        return false;
    }
}
const numerosFiltrados2 = numeros.filter(callBackFilter);
console.log(numerosFiltrados2)

//EX 2 thats the right way to do it! do it like this \/
const numerosFiltrados = numeros.filter(valor => valor > 50);
console.log(numerosFiltrados);



// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a
const pessoas = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 },
];

const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 6);
const pessoasComMaisDeCinquentaAnos = pessoas.filter(obj => obj.idade > 50);
const nomeTerminaComA = pessoas.filter(obj => {
  return obj.nome.toLowerCase().endsWith('a');
});
console.log(pessoasComNomeGrande);

console.log(pessoasComMaisDeCinquentaAnos);

console.log(nomeTerminaComA);