// JavaScript for toggling the navbar
document.addEventListener('DOMContentLoaded', function () {
    var toggler = document.querySelector('.navbar-toggler');
    var navContainer = document.getElementById('navbarNav');

    toggler.addEventListener('click', function () {
        if (navContainer.classList.contains('show')) {
            navContainer.classList.remove('show');
        } else {
            navContainer.classList.add('show');
        }
    });
});
