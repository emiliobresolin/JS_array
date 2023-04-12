// Retorne a soma do dobro de todos os pares
// -> Filtrar pares
// -> Dobrar os valores
// -> Reduzir (somar tudo)
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosPares = numeros
  .filter(valor => valor % 2 === 0)//pega somente os valores pares
  .map(valor => valor * 2)//dobra todos os valores pares
  .reduce((ac, valor) => ac + valor);//soma todos os valores dobrados

console.log(numerosPares);