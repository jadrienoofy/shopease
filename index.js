const userToggle = document.getElementById('user-toggle');
const label = document.querySelector('label[for="user-toggle"]');

window.addEventListener('click', (e) => {
  if (!label.contains(e.target) && !document.getElementById('user-toggle').contains(e.target)) {
    userToggle.checked = false;
  }
});
AOS.init({
    duration: 2000,
    once: true
});
const scrollContainer = document.getElementById('scrollContainer');
const leftBtn = document.getElementById('leftBtn');
const rightBtn = document.getElementById('rightBtn');

function updateArrows() {
    leftBtn.classList.toggle('hidden', scrollContainer.scrollLeft <= 0);
    rightBtn.classList.toggle('hidden', scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth - 1);
}

rightBtn.addEventListener('click', () => {
    scrollContainer.scrollBy({ left: 300, behavior: 'smooth' });
});
leftBtn.addEventListener('click', () => {
    scrollContainer.scrollBy({ left: -300, behavior: 'smooth' });
});

scrollContainer.addEventListener('scroll', updateArrows);