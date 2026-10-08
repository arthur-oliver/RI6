export default abstract class Calculo {
    // Quantidade de números que a operação exige (padrão: 2)
    public readonly quantidadeNumeros: number = 2

    public abstract calcular(numero1: number, numero2: number, ...outros: number[]): number | number[]
}