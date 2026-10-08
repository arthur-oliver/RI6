export default class Mensagens {

    public listarOpcoes = () => {
        console.log(`Aqui você pode:`)
        console.log(`Somar, Subtrair ou Multiplicar números\n`)
    }

    public comoUsar = () => {
        console.log(`Para usar digite os números e a opção de cálculo separados por espaço como: "1 2 Somar/Subtrair/Multiplicar"\n`)
        console.log(`O resultado será dado de acordo com a operação escolhida\n`)
        console.log(`Para encerrar digite "Sair"\n`)
    }

    public boasVindas = () => {
        console.log('\nBem-vindo a calculadora polimórfica\n')
    }

}