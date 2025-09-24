function calcularMontante() {
    let capital = parseFloat(prompt("Informe o capital inicial (R$):"));
    let taxaJuros = parseFloat(prompt("Informe a taxa de juros mensal (%):"));
    let tempo = parseInt(prompt("Informe o tempo do investimento (em meses):"));

    // Validação básica
    if (isNaN(capital) || capital <= 0) {
        alert("Capital inválido.");
        return;
    }

    if (isNaN(taxaJuros) || taxaJuros <= 0) {
        alert("Taxa de juros inválida.");
        return;
    }

    if (isNaN(tempo) || tempo <= 0) {
        alert("Tempo inválido.");
        return;
    }

    // Conversão da taxa de percentual para decimal
    let i = taxaJuros / 100;

    // Fórmula do montante: M = C * (1 + i)^t
    let montante = capital * Math.pow(1 + i, tempo);

    // Exibição do resultado
    document.getElementById("resultado").innerHTML = `
        <strong>Capital Inicial:</strong> R$ ${capital.toFixed(2)}<br>
        <strong>Taxa de Juros:</strong> ${taxaJuros.toFixed(2)}% ao mês<br>
        <strong>Tempo:</strong> ${tempo} mês(es)<br>
        <strong>Montante Final:</strong> R$ ${montante.toFixed(2)}
    `;
}
