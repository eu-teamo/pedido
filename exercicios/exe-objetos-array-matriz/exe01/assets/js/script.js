const pessoa = {
    nome: 'Samuel',
    idade: 16,
    profissao: 'Desenvolvedor',
    apresentar: function(){
        console.log(`Nome: ${this.nome}, Idade: ${this.idade}, Profissão: ${this.profissao}`);
        document.getElementById('resultado').innerHTML = `Nome: ${this.nome}, Idade: ${this.idade}, Profissão: ${this.profissao}`;
    }
};

//Alterando a idade
function enviarDados(){
    let txtIdade = document.getElementById('idade').value;
    pessoa.idade = Number(txtIdade);
    pessoa.apresentar()
}
pessoa.apresentar()