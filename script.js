// Mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
const nav = document.getElementById('nav');
navToggle.addEventListener('click', ()=>{
  nav.classList.toggle('open');
});

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', function(e){
    const target = document.querySelector(this.getAttribute('href'));
    if(target){
      e.preventDefault();
      nav.classList.remove('open');
      target.scrollIntoView({behavior:'smooth',block:'start'});
    }
  });
});

// Simple form validation and fake send
const form = document.getElementById('contact-form');
const msg = document.getElementById('form-msg');
form.addEventListener('submit', (e)=>{
  e.preventDefault();
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();
  if(!name || !email || !message){
    msg.textContent = 'Please complete all fields.';
    return;
  }
  msg.textContent = 'Sending...';
  // Simulate send
  setTimeout(()=>{
    msg.textContent = 'Thanks — your message was received (demo).';
    form.reset();
  },900);
});
