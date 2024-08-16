// JavaScript for toggling the navbar
document.addEventListener('DOMContentLoaded', function () {
    var toggler = document.querySelector('.navbar-toggler');
    var navbar = document.querySelector('.navbar');

    toggler.addEventListener('click', function () {
        navbar.classList.toggle('open');
    });
});
