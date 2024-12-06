// Atividade 1
let texto = "200"


// Atividade 2
let funcaoDeSomar = function(valor1, valor2){
    // Atribua a soma das variaveis valor1 e valor2 ao resultado
    let resultado = valor1 + valor2;
    
    return resultado;
};

funcaoDeSomar(1, 3);
funcaoDeSomar(2, -5);


// Atividade 3: vetores
let listaMista = [50, "mundo", true, {teste : "Testando"}]

//Atividade 4

function testarTamanho(valor){
    if(valor > 15){
        return "maior"
    }
    else if(valor < 3) {
        return "menor"
    }
    else{
        return "na faixa"
    }
}

//Atividade 5
// Este objeto não precisa ser mexido
let carro = {
    rodas: 4,
    portas: 2,
    cor: "cinza",
    ano: 2012,
    estado: "novo"
};


function mudarPropriedade(nomePropriedade, novoValor){
    switch(nomePropriedade){
        // O case rodas é um exemplo para as próximas partes
        case "rodas":
            if(novoValor > 1){
                carro.rodas = novoValor;
                return "Alteracao concluida"
            }
            else{
                return "Minimo de rodas precisa ser 2";
            }
            break;
        case "portas":
            if(novoValor > 0){
                carro.portas = novoValor;
                return "Alteracao concluida"
            }
            else{
                return "Minimo de portas precisa ser 1"
            }
            // Para alterar as portas, é necessário que o
            // novo valor seja maior que 0
            // senão deve retornar a string "Minimo de portas precisa ser 1"
            break;
        case "cor":
            if (novoValor === "cinza" || novoValor === "preto" || novoValor === "vermelho"){
                carro.cor = novoValor;
                return "Alteracao concluida"
            }
            else{
                return "Cor invalida";
            }
            // para alterar a cor, novo valor pode ser igual a cinza ou preto ou vermelho
            // se for diferente, retornar "Cor invalida"
            break;
        case "ano":
            carro.ano = novoValor;
            if(novoValor == 2019){
                carro.estado = "novo";
            }
            else{
                carro.estado = "usado";
            }
            return "Alteracao concluida"
            break;
        // criar um case para o "ano"
        // alterar o ano do carro para o ano informado
        // se o ano for igual a 2019, alterar o estado para "novo" 
        // senao alterar o estado para "usado"
        default:
            return "Propriedade invalida"
            break;
            // retornar a fraase "Propriedade invalida";
    }
    
    // retornar a frase Alteracao concluida somente se foi possivel
    // alterar um dado do objeto.
}

// Atividade 6
function calcularVetor(vetor, numero){
    for (let i = 0; i < vetor.length; i++){
        if(vetor[i] > 5){
            vetor[i] = vetor[i] * numero
        }
    }
    
    return vetor
}

//Atividade 7:
function somarSubVetores(vetor){
    let resultado = [];
    
    
    for (let subvetor of vetor) {
        let soma = 0;
        for (let numero of subvetor) {
            soma += numero;
        }
        resultado.push(soma);
    }

    return resultado;
}

//Atividade 8
function testeFinal(palavra, numero){
    switch (palavra) {
        case 'mundojs':
            console.log("MundoJS");
            return numero;
        case 'soma':
            return (numero / 2) + (numero * numero);
        case 'vetor':
            let vetor1 = [];
            for(let i = 0; i < 5; i++){
                vetor1[i] = numero + (i * 2);
            }
            return vetor1;
        case 'booleano':
            let vetor = [];
            let sum = 0;
            for(let i = 0; i < 5; i++){
                vetor[i] = numero + (i * 2);
                sum += vetor[i];
            }
            if (sum > 35){
                return true;
            }
            else{
                return false;
            }
            break;
        default:
            return -1;
    }
}



