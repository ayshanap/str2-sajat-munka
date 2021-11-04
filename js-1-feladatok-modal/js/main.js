let modal = document.getElementById('modal');

const openModal = () => {
    modal.classList.remove('fadeOut');
    modal.classList.add('fadeIn');

    modal.style.display = 'inline';
    modal.focus();

    document.getElementById('overlay').style.visibility = 'visible';
}

const closeModal = () => {
    document.getElementById('modal').style.display = 'none';
    document.getElementById('overlay').style.visibility = 'hidden';
}

const fadeOutAnim = () => {
    modal.classList.add("fadeOut");

    document.querySelector('.fadeOut').addEventListener('animationend', () => {
        modal.classList.remove('fadeOut');
    });    
}



document.getElementById('openbtn').addEventListener('click', function () {
    openModal();

    document.addEventListener('click', function (event) {
        if (
            event.target !== document.querySelector('.openbtn') ||
            event.target === document.querySelector('.overlay') ||
            event.target === document.querySelectorAll(".closebtn")
        ) {
            setTimeout(closeModal, 900);
            fadeOutAnim();
        }
    })
})
