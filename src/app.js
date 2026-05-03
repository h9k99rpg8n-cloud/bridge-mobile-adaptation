const startBtn = document.getElementById('startBtn');
const input = document.getElementById('projectName');
const result = document.getElementById('result');
const output = document.getElementById('projectOutput');

startBtn.addEventListener('click', () => {
  const name = input.value.trim();

  if (!name) {
    alert('Escribe un nombre para el proyecto');
    return;
  }

  output.textContent = `Proyecto móvil iniciado: ${name}`;
  result.classList.remove('hidden');
});
