document.querySelector('.nav-toggle').addEventListener('click', function() {
  const navMenu = document.querySelector('.nav-menu');
  this.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', function(e) {
  const nav = document.querySelector('.navigation');
  if (!nav.contains(e.target)) {
    document.querySelector('.nav-toggle').classList.remove('active');
    document.querySelector('.nav-menu').classList.remove('active');
  }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

 document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const form = this;

    emailjs.sendForm('service_35ncl2i', 'template_moug5hw', form)
      .then(() => {
        alert('✅ Message sent successfully!');
        form.reset();
      }, (error) => {
        alert('❌ Failed to send message.\n' + JSON.stringify(error));
      });
  });

