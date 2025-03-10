// calculadora.js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const resultadoInput = document.getElementById('Result');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); 

        // Criando as constantes
        const numero1 = parseFloat(document.getElementById('numero1-1').value);
        const numero2 = parseFloat(document.getElementById('numero1-2').value);

        // Verifica quais operações estão selecionadas
        const operacoes = document.querySelectorAll('input[name="operacao"]:checked');
        if (operacoes.length === 0) {
            alert('Por favor, selecione uma operação.');
            return;
        }

        let resultado = 0;
        let operacaoSelecionada = false;

        operacoes.forEach(operacao => {
            operacaoSelecionada = true; 
            switch (operacao.value) {
                case 'soma':
                    resultado = numero1 + numero2;
                    break;
                case 'subtracao':
                    resultado = numero1 - numero2;
                    break;
                case 'multiplicacao':
                    resultado = numero1 * numero2;
                    break;
                case 'divisao':
                    if (numero2 !== 0) {
                        resultado = numero1 / numero2;
                    } else {
                        alert('Não é possível dividir por zero.');
                        resultado = ''; // Em caso d erro, limpa o result
                        return;
                    }
                    break;
            }
        });
        resultadoInput.value = resultado;
    });
});
