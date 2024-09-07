// FAQ accordion
document.addEventListener('DOMContentLoaded', () => {
  const faqContainer = document.querySelector('.faq-content');

  faqContainer.addEventListener('click', e => {
    const groupHeader = e.target.closest('.faq-group-header');

    if (!groupHeader) return;
    
    const group = groupHeader.parentElement;
    const groupBody = group.querySelector('.faq-group-body');
    const icon = group.querySelector('i');

    // toggle icon
    icon.classList.toggle('fa-plus');
    icon.classList.toggle('fa-minus');

    // toggle visibility of body
    groupBody.classList.toggle('open');

    // close other open faq bodies
    const otherGroups = faqContainer.querySelectorAll('.faq-group');
    
    otherGroups.forEach( otherGroup => {
      if ( otherGroup !== group ) {
        const otherGroupBody = otherGroup.querySelector('.faq-group-body');
        const otherIcon = otherGroup.querySelector('.faq-group-header i');

        otherGroupBody.classList.remove('open');
        otherIcon.classList.remove('fa-minus');
        otherIcon.classList.add('fa-plus');
      }
    })
  })
});

//  Mobile menu
document.addEventListener('DOMContentLoaded', () => {
  const hamburgerButton = document.querySelector('.hamburger-button');
  const mobileMenu = document.querySelector('.mobile-menu');

  hamburgerButton.addEventListener('click', () => mobileMenu.classList.toggle('active'));

  // remove active class from mobile menu when screen width is larger than 670px
  window.addEventListener('resize', () => {
    if (window.innerWidth > 670) {
      mobileMenu.classList.remove('active');
    }
  });
});
























