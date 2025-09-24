function analisarNumeros() {
    let n = prompt("Quantos números você deseja digitar?");
    n = parseInt(n);

    if (isNaN(n) || n <= 0) {
        alert("Por favor, insira um número válido maior que zero.");
        return;
    }

    let numeros = [];

    for (let i = 1; i <= n; i++) {
        let entrada = prompt(`Digite o ${i}º número:`);
        let numero = parseFloat(entrada);

        if (isNaN(numero)) {
            alert("Entrada inválida. Por favor, insira um número.");
            i--; // Repetir a iteração
            continue;
        }

        numeros.push(numero);
    }

    // Cálculos
    let menor = Math.min(...numeros);
    let maior = Math.max(...numeros);
    let soma = numeros.reduce((acc, val) => acc + val, 0);

    // Exibição
    document.getElementById("resultado").innerHTML =
        `Menor valor: ${menor}<br>
         Maior valor: ${maior}<br>
         Soma dos valores: ${soma}`;
}
