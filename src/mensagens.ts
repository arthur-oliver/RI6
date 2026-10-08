export default class Mensagens {

    public listarOpcoes = () => {
        console.log(`Aqui você pode:`)
        console.log(`Somar, Subtrair, Multiplicar, Dividir, Potencia, Raiz ou Bhaskara\n`)
    }

    public comoUsar = () => {
        console.log(`Para usar digite os números e a opção de cálculo separados por espaço como: "1 2 Somar"`)
        console.log(`Operações: Somar, Subtrair, Multiplicar, Dividir, Potencia (base expoente), Raiz (radicando índice)`)
        console.log(`Bhaskara usa três números (a b c), como: "1 -3 2 Bhaskara"`)
        console.log(`Pode digitar a operação em maiúsculo ou minúsculo\n`)
        console.log(`Para encerrar digite "Sair"\n`)
    }

    public boasVindas = () => {
        console.log('\nBem-vindo a calculadora polimórfica\n')
    }

}