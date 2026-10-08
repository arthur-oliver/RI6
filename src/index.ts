import * as readline from 'readline';
import Bhaskara from './bhaskara';
import Calculo from './calculo';
import Divisao from './divisao';
import Mensagens from './mensagens';
import Multiplicacao from './multiplicacao';
import Potenciacao from './potenciacao';
import Radiciacao from './radiciacao';
import Soma from './soma';
import Subtracao from './subtracao';

let mensagens = new Mensagens()

let normalizar = (texto: string): string => {
  return texto.trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}

let escolherCalculo = (operacao: string): Calculo | undefined => {
  switch (operacao) {
    case 'somar':
      return new Soma()
    case 'subtrair':
      return new Subtracao()
    case 'multiplicar':
      return new Multiplicacao()
    case 'dividir':
      return new Divisao()
    case 'potencia':
    case 'potenciar':
      return new Potenciacao()
    case 'raiz':
    case 'radiciar':
      return new Radiciacao()
    case 'bhaskara':
      return new Bhaskara()
    default:
      return undefined
  }
}

let mostrarResultado = (resultado: number | number[]) => {
  if (Array.isArray(resultado)) {
    if (resultado.length == 0) {
      console.log(`A equação não possui raízes reais\n`)
    } else if (resultado.length == 1) {
      console.log(`A equação possui uma raiz real: x = ${resultado[0]}\n`)
    } else {
      console.log(`As raízes da equação são: x1 = ${resultado[0]} e x2 = ${resultado[1]}\n`)
    }
  } else {
    console.log(`O resultado da operação é: ${resultado}\n`)
  }
}

let iniciar = () => {
  let leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  leitor.question(`Quais são seus números e a operação desejada?\n`, (valor) => {
    let instrucoes = valor.trim().split(/\s+/)
    // A operação é sempre a última palavra; o que vem antes são os números
    let operacao = normalizar(instrucoes[instrucoes.length - 1])
    let numeros = instrucoes.slice(0, -1).map((texto) => Number(texto.replace(',', '.')))
    console.log(`Estas foram suas instruções: ${instrucoes}\n`)

    if (operacao == 'sair') {
      console.log(`Operação concluida!`)
    } else {
      let calculo = escolherCalculo(operacao)
      if (!calculo) {
        console.log(`Operação não compreendida (possível ERRO de sintaxe!) :(`)
      } else if (numeros.length != calculo.quantidadeNumeros || numeros.some((n) => isNaN(n))) {
        console.log(`Esta operação precisa de ${calculo.quantidadeNumeros} números válidos :(`)
      } else {
        try {
          let [numero1, numero2, ...outros] = numeros
          mostrarResultado(calculo.calcular(numero1, numero2, ...outros))
        } catch (erro) {
          console.log(`Erro: ${(erro as Error).message}\n`)
        }
      }
    }
    leitor.close()
    if (operacao != 'sair') {
      mensagens.comoUsar()
      iniciar()
    }
  });
}
mensagens.boasVindas()
mensagens.listarOpcoes()
mensagens.comoUsar()
iniciar()