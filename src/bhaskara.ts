import Calculo from "./calculo";

export default class Bhaskara extends Calculo {
    public readonly quantidadeNumeros: number = 3

    private calcularDelta(a: number, b: number, c: number): number {
        return b * b - 4 * a * c
    }

    public calcular(a: number, b: number, c: number): number[] {
        if (a === 0) {
            throw new Error('O coeficiente "a" não pode ser zero em uma equação do 2º grau')
        }
        let delta = this.calcularDelta(a, b, c)
        if (delta < 0) {
            return []
        }
        if (delta === 0) {
            return [-b / (2 * a)]
        }
        let raizDelta = Math.sqrt(delta)
        return [(-b + raizDelta) / (2 * a), (-b - raizDelta) / (2 * a)]
    }
}