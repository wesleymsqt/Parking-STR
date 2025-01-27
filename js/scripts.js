window.addEventListener('DOMContentLoaded', event => {
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});

// ALTERNANR O ESTADO DAS VAGAS 
function toggleStatus(button) {
    const card = button.parentElement;
    const counter = document.getElementById('available-spaces');
    let availableSpaces = parseInt(counter.textContent);

    if (card.classList.contains('bg-success')) {
        card.classList.remove('bg-success');
        card.classList.add('bg-danger');
        button.textContent = 'OCUPADO';
        counter.textContent = availableSpaces - 1;
    } else {
        card.classList.remove('bg-danger');
        card.classList.add('bg-success');
        button.textContent = 'DISPONIVEL';
        counter.textContent = availableSpaces + 1;
    }
}