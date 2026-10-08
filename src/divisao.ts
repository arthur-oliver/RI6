import Calculo from "./calculo";

export default class Divisao extends Calculo {
    public calcular(numero1: number, numero2: number): number {
        if (numero2 === 0) {
            throw new Error('Não é possível dividir por zero')
        }
        return numero1 / numero2
    }
}