const navLg = document.querySelector('#navbar-lg');
const navBrand = document.querySelector('#navbar-brand-lg');
const navLink = document.querySelectorAll('.nav-link-lg');

document.addEventListener('scroll', () => {
    event.preventDefault();

    if (window.scrollY >= 150 && screen.width >= 992) {
        navLg.style.backgroundColor = "white";
        navBrand.style.color = "black";
        navLink.forEach(item => {
            item.style.color = "black";
            item.style.fontWeight = "bold";
        })
    } else {
        navLg.style.backgroundColor = "transparent";
        navBrand.style.color = "#fdcc52";
        navLink.forEach(item => {
            item.style.color = "white";
            item.style.fontWeight = "normal";
        })
    }
});
