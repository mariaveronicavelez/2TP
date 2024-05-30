document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('calcularBtn').addEventListener('click', function() {
        var peso = parseFloat(document.getElementById('peso').value);
        var estaturaCm = parseFloat(document.getElementById('estatura').value);

        console.log('Peso:', peso);
        console.log('Estatura:', estaturaCm);

        var estaturaM = estaturaCm / 100;
        var imc = peso / Math.pow(estaturaM, 2);
        console.log('IMC:', imc);
        alert('Tu índice de masa corporal (IMC) es: ' + imc.toFixed(2));
    });
});
