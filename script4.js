// Versão com salário fixo de R$ 1.000,00
function calcularSalarioFixo() {
    let salario = 1000.00;
    let anoAtual = new Date().getFullYear();
    let percentual = 0.15;

    for (let ano = 1996; ano <= anoAtual; ano++) {
        let aumento = salario * percentual;
        salario += aumento;
        percentual *= 2; // dobra a cada ano
    }

    document.getElementById("resultado").innerHTML =
        `<strong>Salário inicial:</strong> R$ 1.000,00<br>
         <strong>Salário atual (${anoAtual}):</strong> R$ ${salario.toFixed(2)}`;
}

// Versão com salário informado via prompt()
function calcularSalarioComPrompt() {
    let salarioInicial = parseFloat(prompt("Informe o salário inicial (ex: 1000):"));

    if (isNaN(salarioInicial) || salarioInicial <= 0) {
        alert("Salário inválido. Tente novamente.");
        return;
    }

    let salario = salarioInicial;
    let anoAtual = new Date().getFullYear();
    let percentual = 0.15;

    for (let ano = 1996; ano <= anoAtual; ano++) {
        let aumento = salario * percentual;
        salario += aumento;
        percentual *= 2; // dobra a cada ano
    }

    document.getElementById("resultado").innerHTML =
        `<strong>Salário inicial:</strong> R$ ${salarioInicial.toFixed(2)}<br>
         <strong>Salário atual (${anoAtual}):</strong> R$ ${salario.toFixed(2)}`;
}
