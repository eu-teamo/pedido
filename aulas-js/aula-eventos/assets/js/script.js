function eventoClique(){
    alert('Evento de Clique!');
    document.body.style.backgroundColor = 'Yellow';
}

function eventoDblClique(){
    alert('Evento de Clique duplo!');
    document.body.style.backgroundColor = 'Red';
}

function viraVermelho(){
    document.getElementById('box').style.backgroundColor = 'Red';
}

function viraAzul(){
    document.getElementById('box').style.backgroundColor = 'Blue';
}

function adicionaTexto(){
    document.getElementById('texto').append('O mouse moveu!');
}