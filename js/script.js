// Screens
const screen3 = document.getElementById('screen3');
const screen4 = document.getElementById('screen4');
const screen5 = document.getElementById('screen5');

// Seat selection
const seats = screen3.querySelectorAll('.seat-card');
const selectedCount = document.getElementById('selected-count');

// SHOW Screen 3 overlay
document.querySelectorAll('.transfer-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    screen3.classList.add('show');
  });
});

// Seat selection toggle
seats.forEach(seat => {
  seat.addEventListener('click', () => {
    seat.classList.toggle('selected');
    const count = screen3.querySelectorAll('.seat-card.selected').length;
    selectedCount.textContent = `${count} Selected`;
  });
});

// Transfer link -> show Screen 4
const transferLink = screen3.querySelector('.transfer-link');
transferLink.addEventListener('click', (e) => {
  e.preventDefault();
  screen3.classList.remove('show');
  screen4.classList.add('show');
});

// Back button on Screen 4 -> back to Screen 3
screen4.querySelector('.back-btn').addEventListener('click', (e) => {
  e.preventDefault();
  screen4.classList.remove('show');
  screen3.classList.add('show');
});

// View Ticket buttons -> show Screen 5
document.querySelectorAll('.view-ticket').forEach(btn => {
  btn.addEventListener('click', () => {
    screen5.classList.add('show');
  });
});

// Close Screen 5 overlay
screen5.querySelector('.fa-times').addEventListener('click', () => {
  screen5.classList.remove('show');
});

// Optional: Close Screen 3 overlay (top right X)
screen3.querySelector('.fa-times')?.addEventListener('click', () => {
  screen3.classList.remove('show');
});
