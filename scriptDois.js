class Calculadora {
    constructor() {
        this.resultado = 0;
    }

    somar(a, b){
        this.resultado = a + b;
        return this.resultado;
    }

    subtrair(a, b){
        this.resultado = a - b;
        return this.resultado;
    }

    getUltimoResultado() {
        return this.resultado;
    }
}

const calc = new Calculadora();

calc.somar(199.3, 120);

console.log(calc.getUltimoResultado());
