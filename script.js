var navbarCollapse = document.querySelector('.navbar-collapse');

document.addEventListener('click', function(event) {
  if (navbarCollapse.classList.contains('show') && !navbarCollapse.contains(event.target)) {
    navbarCollapse.classList.remove('show');
  }
});