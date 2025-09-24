function contarParesImpares() {
    let pares = 0;
    let impares = 0;

    for (let i = 1; i <= 10; i++) {
        let entrada = prompt(`Digite o ${i}º número inteiro:`);

        // Converte para número inteiro
        let numero = parseInt(entrada);

        // Validação
        if (isNaN(numero)) {
            alert("Entrada inválida. Por favor, insira um número inteiro.");
            i--; // repetir a iteração
            continue;
        }

        if (numero % 2 === 0) {
            pares++;
        } else {
            impares++;
        }
    }

    document.getElementById("resultado").innerHTML =
        `Você digitou ${pares} número(s) par(es) e ${impares} número(s) ímpar(es).`;
}
