let calculate = document.getElementById('calculate');
let result = document.getElementById('result')

function calculatePercentage() {
    let valueA = parseFloat(document.getElementById('a').value);
    let valueB = parseFloat(document.getElementById('b').value);
    let valueC = parseFloat(document.getElementById('c').value);
    let valueX = parseFloat(document.getElementById('x').value);

    let resultado = (valueB * valueC) / valueA;

    // result.innerHTML = `O resultado da regra de 3 é: ${resultado}`;
    result.innerHTML = "O resultado da regra de 3 é: " + resultado.toFixed(2) + ' ✔ ';
    
}

calculate.addEventListener('click', calculatePercentage);