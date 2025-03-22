let controleDisplay = false;

function appendToDisplay(value) {
    const display = document.getElementById('display');

    // Se o visor deve ser limpo e o valor é um número ou ponto, limpa o visor
    if (controleDisplay && !isNaN(value) || value === '.') {
        display.value = '';
        controleDisplay = false;
    }

    display.value += value; // Adiciona o valor ao visor
}

function clearDisplay(){
    const display = document.getElementById('display');
    display.value = "";
}

function calculate(){
    const display = document.getElementById('display');

    try{
        display.value = eval(display.value);
        controleDisplay = true; 
    } catch (erro){
        display.value = "Erro";
        controleDisplay = false;
    }
}


//Eventos
document.getElementById('txt_somar').addEventListener('click', () => appendToDisplay('+'));
document.getElementById('txt_subtrair').addEventListener('click', () => appendToDisplay('-'));
document.getElementById('txt_multiplicar').addEventListener('click', () => appendToDisplay('*'));
document.getElementById('txt_dividir').addEventListener('click', () => appendToDisplay('/'));

document.getElementById('txt_clear').addEventListener('click', clearDisplay);
document.getElementById('txt_calcular').addEventListener('click', calculate);

document.getElementById('txt_7').addEventListener('click', () => appendToDisplay('7'));
document.getElementById('txt_8').addEventListener('click', () => appendToDisplay('8'));
document.getElementById('txt_9').addEventListener('click', () => appendToDisplay('9'));
document.getElementById('txt_4').addEventListener('click', () => appendToDisplay('4'));
document.getElementById('txt_5').addEventListener('click', () => appendToDisplay('5'));
document.getElementById('txt_6').addEventListener('click', () => appendToDisplay('6'));
document.getElementById('txt_1').addEventListener('click', () => appendToDisplay('1'));
document.getElementById('txt_2').addEventListener('click', () => appendToDisplay('2'));
document.getElementById('txt_3').addEventListener('click', () => appendToDisplay('3'));
document.getElementById('txt_0').addEventListener('click', () => appendToDisplay('0'));
document.getElementById('txt_.').addEventListener('click', () => appendToDisplay('.'));