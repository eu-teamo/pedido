let numeros = [10, 20, 30, 40, 50];
document.getElementById('resultado').innerHTML = `Números: ${numeros} <br><br>`

numeros.push(60);
document.getElementById('resultado').innerHTML += `Números: ${numeros} <br><br>`

numeros.shift();
document.getElementById('resultado').innerHTML += `Números: ${numeros} <br><br>`

numeros.forEach(numeros)

