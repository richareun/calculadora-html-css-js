class Display {
    constructor(displayValorAnterior, displayValorActual) {
        this.displayValorActual = displayValorActual;
        this.displayValorAnterior = displayValorAnterior;
        this.calculadora = new Calculadora();
        this.tipOpr = undefined;
        this.valorActual = '';
        this.valorAnterior = '';
        this.sigOpr = {
            sumar: '+',
            dividir: '/',
            multiplicar: 'x',
            restar: '-',
        }
    }

    brrr() {
        this.valorActual = this.valorActual.toString().slice(0,-1);
        this.impVal();
    }

    brrrTd() {
        this.valorActual = '';
        this.valorAnterior = '';
        this.tipOpr = undefined;
        this.impVal();
    }

    digitar(tipo) {
        this.tipOpr !== 'igual' && this.resultado();
        this.tipOpr = tipo;
        this.valorAnterior = this.valorActual || this.valorAnterior;
        this.valorActual = '';
        this.impVal();
    }

    agregarNum(num) {
        if(num === '.' && this.valorActual.includes('.')) return
        this.valorActual = this.valorActual.toString() + num.toString();
        this.impVal();
    }

    impVal() {
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.sigOpr[this.tipOpr] || ''}`;
    }

    resultado(){
        const valorAnterior = parseFloat(this.valorAnterior);
        const valorActual = parseFloat(this.valorActual);

        if( isNaN(valorActual) || isNaN(valorAnterior) ) return
        this.valorActual = this.calculadora[this.tipOpr](valorAnterior, valorActual)
    }
}