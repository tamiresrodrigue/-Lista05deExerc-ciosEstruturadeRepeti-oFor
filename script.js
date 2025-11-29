const exercicio01 = document.querySelector("#ex001")
const exercicio02 = document.querySelector("#ex002")
const exercicio03 = document.querySelector("#ex003")
const exercicio04 = document.querySelector("#ex004")
const exercicio05 = document.querySelector("#ex005")
const exercicio06 = document.querySelector("#ex006")
const exercicio07 = document.querySelector("#ex007")
const exercicio08 = document.querySelector("#ex008")
const exercicio09 = document.querySelector("#ex009")
const exercicio10 = document.querySelector("#ex010")
const exercicio11 = document.querySelector("#ex011")
const exercicio12 = document.querySelector("#ex012")
const exercicio13 = document.querySelector("#ex013")
const exercicio14 = document.querySelector("#ex014")
const exercicio15 = document.querySelector("#ex015")
const res = document.querySelector(".res")

function clearDiv() {
    res.innerHTML = ""
}

exercicio01.addEventListener("click", () => {
    /* Faça um programa que exiba os números de 1 a 20.*/
    clearDiv()
    for (let i = 1; i <= 20; i++) {
        res.innerHTML += i;
    }

})


exercicio02.addEventListener("click", () => {
    /*  Escreva um programa que exiba apenas os números pares de 1 a 50. */
    clearDiv()
    for (let i = 1; i <= 50; i++) {
        if (i % 2 === 0) {
            res.innerHTML += i;
        }
    }

})


exercicio03.addEventListener("click", () => {
    /* Crie um programa que exiba a tabuada de um número fornecido pelo usuário (de 1 a 10). */
    clearDiv()
    let numero = parseInt(prompt("Digite um número para ver sua tabuada:"));

    res.innerHTML += `<h2>Tabuada do ${numero}</h2>`;

    for (let i = 1; i <= 10; i++) {
        res.innerHTML += `${numero} x ${i} = ${numero * i} <br>`;
    }


})


exercicio04.addEventListener("click", () => {
    /** Faça um programa que calcule a soma dos números de 1 a 100. */
    clearDiv()
    let soma = 0;

    for (let i = 1; i <= 100; i++) {
        soma += i;
    }

    res.innerHTML += "A soma dos números de 1 a 100 é: " + soma;

})


exercicio05.addEventListener("click", () => {
    /** Escreva um programa que calcule a soma dos números pares de 1 a 200. */
    clearDiv()
    let soma = 0;

    for (let i = 1; i <= 200; i++) {
        if (i % 2 === 0) {
            soma += i;
        }
    }

    res.innerHTML += "A soma dos números pares de 1 a 200 é: " + soma;

})


exercicio06.addEventListener("click", () => {
    /** Crie um programa que leia 10 números inteiros e mostre o maior e o menor valor. */
    clearDiv()
    let maior = Number.NEGATIVE_INFINITY;
    let menor = Number.POSITIVE_INFINITY;

    for (let i = 1; i <= 10; i++) {
        let numero = parseInt(prompt(`Digite o ${i}º número:`));

        if (numero > maior) {
            maior = numero;
        }
        if (numero < menor) {
            menor = numero;
        }
    }

    res.innerHTML += `O maior número é: ${maior} <br>`;
    res.innerHTML += `O menor número é: ${menor}`;

})


exercicio07.addEventListener("click", () => {
    /** Faça um programa que leia 5 números inteiros e calcule a média aritmética. */
    clearDiv()
    let soma = 0;

    for (let i = 1; i <= 5; i++) {
        let numero = parseInt(prompt(`Digite o ${i}º número:`));
        soma += numero;
    }

    let media = soma / 5;

    res.innerHTML += `A média aritmética dos números é: ${media}`;

})


exercicio08.addEventListener("click", () => {
    /** Escreva um programa que mostre a sequência de Fibonacci até o décimo termo. */
    clearDiv()
    let a = 0;
    let b = 1;

    res.innerHTML += "Sequência de Fibonacci (10 termos):<br>";

    for (let i = 1; i <= 10; i++) {
        res.innerHTML += a + "<br>";
        let proximo = a + b;
        a = b;
        b = proximo;
    }


})


exercicio09.addEventListener("click", () => {
    /** Crie um programa que peça ao usuário um número inteiro N e mostre os números de 1 até N. */
    clearDiv()
    let N = parseInt(prompt("Digite um número inteiro:"));

    res.innerHTML += `Números de 1 até ${N}:<br>`;

    for (let i = 1; i <= N; i++) {
        res.innerHTML += i + "<br>";
    }


})


exercicio10.addEventListener("click", () => {
    /** Faça um programa que mostre todos os números ímpares entre 100 e 200. */
    clearDiv()
    res.innerHTML += "Números ímpares entre 100 e 200:<br>";

    for (let i = 100; i <= 200; i++) {
        if (i % 2 !== 0) {
            res.innerHTML += i + "<br>";
        }
    }


})


exercicio11.addEventListener("click", () => {
    /** Escreva um programa que leia 10 idades e calcule a quantidade de pessoas maiores de idade. */
    clearDiv()
    let contadorMaiores = 0;

    for (let i = 1; i <= 10; i++) {
        let idade = parseInt(prompt(`Digite a idade da ${i}ª pessoa:`));

        if (idade >= 18) {
            contadorMaiores++;
        }
    }

    res.innerHTML += `Quantidade de pessoas maiores de idade: ${contadorMaiores}`;


})


exercicio12.addEventListener("click", () => {
    /** Crie um programa que leia um número inteiro e calcule o seu fatorial. */
    clearDiv()
    let numero = parseInt(prompt("Digite um número inteiro:"));
    let fatorial = 1;

    for (let i = 1; i <= numero; i++) {
        fatorial *= i; // equivalente a fatorial = fatorial * i
    }

    res.innerHTML += `O fatorial de ${numero} é: ${fatorial}`;


})


exercicio13.addEventListener("click", () => {
    /** Faça um programa que peça ao usuário um número e exiba a soma de todos os múltiplos de 3 até esse número. */
    clearDiv()
    let numero = parseInt(prompt("Digite um número inteiro:"));
    let soma = 0;

    for (let i = 1; i <= numero; i++) {
        if (i % 3 === 0) {
            soma += i;
        }
    }

    res.innerHTML += `A soma de todos os múltiplos de 3 até ${numero} é: ${soma}`;


})


exercicio14.addEventListener("click", () => {
    /** Escreva um programa que leia 5 nomes e os exiba em ordem invertida. */
    clearDiv()
    let nomes = [];

    // Lê 5 nomes do usuário
    for (let i = 1; i <= 5; i++) {
        let nome = prompt(`Digite o ${i}º nome:`);
        nomes.push(nome);
    }

    // Exibe os nomes em ordem invertida
    res.innerHTML += "Nomes em ordem invertida:<br>";
    for (let i = nomes.length - 1; i >= 0; i--) {
        res.innerHTML += nomes[i] + "<br>";
    }

    res.innerHTML += "O fatorial de" + numero + " é: " + fatorial

})


exercicio15.addEventListener("click", () => {
    /** Crie um programa que desenhe na tela um triângulo de asteriscos com base em um número informado pelo usuário.*/
    clearDiv()
    let base = parseInt(prompt("Informe a base (um número inteiro positivo):"));

    if (isNaN(base) || base <= 0) {
        res.innerHTML += "Por favor, digite um número inteiro positivo.";
    } else {
        let linha = "";
        for (let i = 1; i <= base; i++) {
            linha += "*";
            res.innerHTML += linha + "<br>"; 
        }
    }


})