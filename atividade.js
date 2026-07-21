let numeros = [4, 8, 15, 16, 23, 42];

for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}

numeros = [4, 8, 15, 16, 23, 42];
let soma = 0;

for (let i = 0; i < numeros.length; i++) {
  soma += numeros[i];
}

console.log(soma);

function media(vetor) {
    if (vetor.length === 0) {
      return 0;
    }
  
    let soma = 0;
    for (let i = 0; i < vetor.length; i++) {
      soma += vetor[i];
    }
  
    return soma / vetor.length;
  }

  function contem(vetor, valor) {
    for (let i = 0; i < vetor.length; i++) {
      if (vetor[i] === valor) {
        return true; // Encontrou, encerra a função imediatamente
      }
    }
    return false; // Percorreu todo o vetor e não encontrou
  }

  function contem(vetor, valor) {
    for (let i = 0; i < vetor.length; i++) {
      if (vetor[i] === valor) {
        return i; // Retorna a posição onde o valor foi achado
      }
    }
    return -1; // Retorna -1 se o valor não existir no vetor
  }

  let nomes = ["Ana", "Bruno", "Carla"];
let resultado = "";

for (let i = 0; i < nomes.length; i++) {
  resultado += `${i + 1} - ${nomes[i]}\n`;
}

console.log(resultado.trim());