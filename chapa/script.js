function openModal() {
    const modal = document.getElementById('modal-proposal-board01');
    modal.classList.add('open');

    modal.addEventListener('click', (e) => {
        if(e.target.id == 'close01' || e.target.id == 'modal-proposal-board01') {
            modal.classList.remove('open');
        }
    })
}

function openModal02() {
    const modal = document.getElementById('modal-proposal-board02');
    modal.classList.add('open');

    modal.addEventListener('click', (e) => {
        if(e.target.id == 'close02' || e.target.id == 'modal-proposal-board02') {
            modal.classList.remove('open');
        }
    })
}

function openModal03() {
    const modal = document.getElementById('modal-proposal-board03');
    modal.classList.add('open');

    modal.addEventListener('click', (e) => {
        if(e.target.id == 'close03' || e.target.id == 'modal-proposal-board03') {
            modal.classList.remove('open');
        }
    })
}