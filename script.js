function calcularInvestimento() {
    const capitalInicial = parseFloat(document.getElementById('capital-inicial').value);
    const taxaJuros = parseFloat(document.getElementById('taxa-juros').value) / 100;
    const tempoInvestimento = parseInt(document.getElementById('tempo-investimento').value);
  
if (isNaN(capitalInicial) || isNaN(taxaJuros) || isNaN(tempoInvestimento) || capitalInicial <= 0 || taxaJuros <= 0 || tempoInvestimento <= 0) {
      alert("Por favor, insira valores válidos em todos os campos.");
      return;
    }
    const valorFuturo = capitalInicial * Math.pow(1 + taxaJuros, tempoInvestimento);

    document.getElementById('resultado').innerText = `R$ ${valorFuturo.toFixed(2)}`;
  }
  