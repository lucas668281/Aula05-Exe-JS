//Exe 1
function conversorpl(polegadas){
    const resultado =polegadas * 2.54
return `${polegadas} polegadas equivalem a ${resultado} cm`;
}
console.log(conversorpl(5)); // 5 polegadas equivalem a 12.7 cm

//Exe 2

function stringUrl(str) {
    return `www.${str}.com.br`;
}
console.log(stringUrl(`DigitalHouseAula05`)); // www.DigitalHouseAula05.com.br

//Exe 3

function insPontuacao(str){
    return `${str}`;
}
console.log(insPontuacao(`Não esqueça !`)) //Frase com termino de exclamacao

//Exe 4

function idade(humano){
  const resultado =humano * 7
  return `${humano} Anos Humano equivale a ${resultado} anos de cachorros`;
}
console.log(idade(5)); //5 Anos Humano equivale a  35 anos de cachorros

//Exe 5vc x []

function trabHora(salario){
    const resultado =salario / 160
    return `Minha hora trabalhada vale R$${resultado} sendo meu salario de R$${salario} `;
  }
  console.log(trabHora(3000)); //Minha hora trabalhada vale R$18.75 sendo meu salario de R$ 3000 

//Exe 6

function imc(peso , altura){
    const resultado = peso / (altura * altura);
    return `Com o Peso de ${peso} e a Altura de ${altura} meu IMC e de ${resultado}`
}
console.log(imc(65,1.70)); //Com o Peso de 65 e a Altura de 1.7 meu IMC e de 22.4913494809688

//Exe 7

const conversorTexto = `texto tem que fica maiusculo`;
console.log(conversorTexto.toUpperCase()); //TEXTO TEM QUE FICA MAIUSCULO

//Exe 8

const tipoDados = `texto para retorna o parametro`
console.log(tipoDados.typeof) //undefined uma variável indefinida

//Exe 9

function calcCircunferencia(circulo) {
    return 2 * Math.PI * circulo;
  }
console.log(calcCircunferencia(10)) //circunferencia 62.83185307179586


