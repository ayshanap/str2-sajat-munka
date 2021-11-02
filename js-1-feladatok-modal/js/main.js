let modal = document.getElementById('modal');

const openModal = () => {
    modal.classList.add('fadeIn');

    document.querySelector('.fadeIn').addEventListener('animationend', () => {
        modal.classList.remove('fadeIn');
    });

    modal.style.display = 'block';
    modal.focus();

    document.getElementById('overlay').style.visibility = 'visible';
}

const closeModal = () => {
    modal.classList.add("fadeOut");

    document.querySelector('.fadeOut').addEventListener('animationend', () => {
        modal.classList.remove('fadeOut');
    });

    document.getElementById('modal').style.display = 'none';
    document.getElementById('overlay').style.visibility = 'hidden';
}

document.getElementById('openbtn').addEventListener('click', function () {
    openModal();

    document.addEventListener('click', function (event) {
        if (
            event.target !== document.querySelector('.openbtn') ||
            event.target === document.querySelector('.overlay') ||
            event.target === document.querySelectorAll(".closebtn")
        ) {
            closeModal();
        }
    })
})
