// Section animation
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

document.querySelectorAll('.section').forEach(sec => {
  observer.observe(sec);
});

// Contact form (mailto)
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();

  const name = e.target[0].value;
  const email = e.target[1].value;
  const message = e.target[2].value;

  window.location.href =
    `mailto:your@email.com?subject=Website Project from ${name}&body=${message}%0A%0AEmail: ${email}`;
});
