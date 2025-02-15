//Navigation Bar
document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.hamburger');
  const navList = document.querySelector('.nav-list ul');
  const navItems = document.querySelectorAll('.nav-list ul li a');

  // Hide the menu initially
  navList.style.display = 'none';

  menuBtn.addEventListener('click', () => {
    if (navList.style.display === 'none') {
      navList.style.display = 'flex';
      menuBtn.classList.add('active');
    } else {
      navList.style.display = 'none';
      menuBtn.classList.remove('active');
    }
  });

  navItems.forEach((item) =>
    item.addEventListener('click', () => {
      navList.style.display = 'none';
      menuBtn.classList.remove('active');
    })
  );
});

document.addEventListener('scroll', () => {
  var scroll_position = window.scrollY;
  if (scroll_position > 150) {
    header.style.backgroundColor = '#2f4f4f';
  } else {
    header.style.backgroundColor = 'transparent';
  }
});

//Contact Form
document.addEventListener('DOMContentLoaded', function () {
  const contactBtn = document.getElementById('contact_btn');
  const contactSection = document.getElementById('contact');

  // Set initial state based on visibility
  if (window.getComputedStyle(contactSection).display === 'none') {
    contactBtn.textContent = 'Contact Me';
  } else {
    contactBtn.textContent = 'Hide Contact Form';
  }

  contactBtn.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default button behavior
    if (window.getComputedStyle(contactSection).display === 'none') {
      contactSection.style.display = 'block';
      contactBtn.textContent = 'Hide Contact Section';
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      contactSection.style.display = 'none';
      contactBtn.textContent = 'Contact Me';
      contactBtn.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
