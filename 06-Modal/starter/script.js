'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

function openModal(handler) {
  handler.addEventListener('click', () => {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}
function closeModal(handler) {
  handler.addEventListener('click', () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  });
}

btnOpenModal.forEach(button => {
  openModal(button)
});
 
closeModal(btnCloseModal);
closeModal(overlay);

document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape'){
        if(!modal.classList.contains('hidden')){
            modal.classList.add('hidden');
            overlay.classList.add('hidden');
        }
    }
})
