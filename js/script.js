// Seleciona os elementos principais
const sidebar = document.getElementById('sidebar');
const content = document.getElementById('content');
const toggleButton = document.getElementById('sidebarToggle');

// Adiciona o evento de clique ao botão de alternância
toggleButton.addEventListener('click', () => {
// Alterna a classe 'active' no menu lateral
sidebar.classList.toggle('active');
// Ajusta o conteúdo principal com base no estado do menu
content.classList.toggle('active');
});

// Função para atualizar o status de uma vaga
function updateSlot() {
    const slotNumber = document.getElementById('slot').value;
    const status = document.getElementById('status').value;
    const slot = document.getElementById(`slot-${slotNumber}`);

    if (status === 'occupied') {
        slot.innerHTML = '<img class="slot" src="assets/img/busy.avif" alt="Carro estacionado">';
    } else {
        slot.innerHTML = '<img class="slot" src="assets/img/free.avif" alt="Vaga vazia">';
    }
}