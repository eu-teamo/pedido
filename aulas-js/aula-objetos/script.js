const carro = {
    marca: 'Bmw', 
    modelo: 'I8', 
    ano: 2024, 
    placa: 'XYZ-1234',
    completo: function(){
        return `A marca é ${this.marca}, e o modelo é ${this.modelo}`;
    }
};
console.log(carro.marca); //ou
console.log(carro['marca']);

console.log(carro.completo());