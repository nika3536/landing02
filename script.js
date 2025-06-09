const modal = document.getElementById('myModal');
const openBtn = document.getElementById('openModalBtn');
const closeBtn = document.getElementById('closeModalBtn');

openBtn.onclick = function() {
  modal.style.display = 'flex';
}

closeBtn.onclick = function() {
  modal.style.display = 'none';
}

// Close modal if click outside modal-content
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
}