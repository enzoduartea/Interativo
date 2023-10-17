// Função para alternar entre telas
function goToScreen(screenNumber) {
  // Esconde todas as telas
  let screens = document.querySelectorAll('.screen');
  for (let screen of screens) {
    screen.style.display = 'none';
  }

  // Mostra a tela especificada
  let targetScreen = document.getElementById(`screen${screenNumber}`);
  targetScreen.style.display = 'block';
}

// Função para selecionar uma escolha e preencher uma lacuna
function selectChoice(type, choice) {
  let targetSpan;

  switch (type) {
    case 'characters':
      targetSpan = document.getElementById('character');
      break;
    case 'actions':
      targetSpan = document.getElementById('açao');
      break;
    case 'places':
      targetSpan = document.getElementById('cidade');
      break;
    case 'guide':
      targetSpan = document.getElementById('resposavel');
      break;
  }

  if (targetSpan) {
    targetSpan.textContent = choice;
  }
}

// Inicializar o script exibindo a primeira tela
document.addEventListener('DOMContentLoaded', function () {
  goToScreen(1);
});
