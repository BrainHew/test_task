const btnBuy = document.querySelector('.btn-buy');
const modal = document.getElementById('modal');
const closeModal = document.querySelector('.close');

btnBuy.addEventListener('click', function(event) {
    event.preventDefault();
    modal.style.display = 'block';
});

closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});