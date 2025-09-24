function calcularCirculo() {
    const raio = parseFloat(prompt("Informe o raio do círculo (ex: 5):"));

    if (isNaN(raio) || raio <= 0) {
        alert("Raio inválido. Insira um número maior que zero.");
        return;
    }

    const area = Math.PI * Math.pow(raio, 2);
    const perimetro = 2 * Math.PI * raio;

    document.getElementById("resultado").innerHTML =
        `<strong>Raio informado:</strong> ${raio}<br>
         <strong>Área:</strong> ${area.toFixed(2)}<br>
         <strong>Perímetro (Circunferência):</strong> ${perimetro.toFixed(2)}`;
}
