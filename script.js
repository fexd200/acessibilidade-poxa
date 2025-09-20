document.addEventListener('DOMContentLoaded', function () {
  const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade');
  const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade');

  // Toggle menu
  botaoDeAcessibilidade.addEventListener('click', function () {
    opcoesDeAcessibilidade.classList.toggle('apresenta-lista');
  });

  // Ajuste de fonte
  const aumentaFonteBotao = document.getElementById('aumentar-fonte');
  const diminuiFonteBotao = document.getElementById('diminuir-fonte');

  let tamanhoAtualFonte = 1;

  aumentaFonteBotao.addEventListener('click', function () {
    if (tamanhoAtualFonte < 2) { // limite para não quebrar layout
      tamanhoAtualFonte += 0.1;
      document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
    }
  });

  diminuiFonteBotao.addEventListener('click', function () {
    if (tamanhoAtualFonte > 0.7) { // limite mínimo
      tamanhoAtualFonte -= 0.1;
      document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
    }
  });
});