import Calculo from "./calculo";

export default class Radiciacao extends Calculo {
    public calcular(numero1: number, numero2: number): number {
        if (numero2 === 0) {
            throw new Error('O índice da raiz não pode ser zero')
        }
        let indiceImpar = Number.isInteger(numero2) && Math.abs(numero2) % 2 === 1
        if (numero1 < 0 && !indiceImpar) {
            throw new Error('Não existe raiz real de índice par para número negativo')
        }
        if (numero1 < 0) {
            return -Math.pow(-numero1, 1 / numero2)
        }
        return Math.pow(numero1, 1 / numero2)
    }
}