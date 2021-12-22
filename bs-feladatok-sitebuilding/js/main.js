const navSmall = document.querySelector('#navbar-small');
const navLg = document.querySelector('#navbar-lg');

window.addEventListener('scroll', function () {
    if (document.body.scrollY == 0 && screen.width >= 992) {
        navLg.style.display = "block";
        navSmall.style.display = "none";
    } else {
        navLg.style.display = "none";
        navSmall.style.display = "block";
    }
});
