// Atribuição de valores a variaveis
let idade = 28;
let peso = 75;
const PI = 3.14159;
let numeroMaximo = Number.MAX_VALUE;
let nome = "Rodrigo";
let sobrenome = "paiva";
let nomeCompleto = nome + " " + sobrenome;

// Adição
let num1 = 15;
let num2 = 20;
let soma = num1 + num2;

// booleanos
let bebeBebidaAlcolica = true;
let tiroucnh = true; //Se ja tirou a cnh ja sabe que é maior de idade e não pode beber!
let maiorIdade = idade >= 18;
let pesoAcimaDe100 = peso > 120;
let podeFazerDieta = maiorIdade && pesoAcimaDe100;
let temCarro = false; //isso não significa se a pessoa pode ou não dirigir
let podeDirigir = (maiorIdade && bebeBebidaAlcolica) || tiroucnh || !temCarro;

//Maior igual ou menor igual
let maiorIdadeCivil = idade >= 18;
let altura = 1.67;
let imc = peso / altura;
let imcDesnutricao = imc <= 18;
let numero = 1;
numero++;

//Mostra variaveis no console
const show = (value, valueText) => {
  console.log(value, valueText);
};

show("Idade:", idade);
show("peso:", peso);
show("PI:", PI);
show("Numero Maximo", numeroMaximo);
show("nome completo: ", nomeCompleto);
show("Soma: ", soma);
show("Pode fazer dieta?", podeFazerDieta);
show("Pode Dirigir? ", podeDirigir);
show("tem carro:", !temCarro);
show("imc desnutruição:", imcDesnutricao);
show("incremento", numero);
