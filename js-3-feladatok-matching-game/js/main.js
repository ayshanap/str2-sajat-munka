let card = document.querySelectorAll(".card");

let openedCards = [];
let matchedCards = [];

const showCard = function() {
    this.classList.add("show");
    openedCards.push(this);
    openCard();    
}

const openCard = () => {
    if (openedCards.length === 2) {
        card.forEach(element => element.removeEventListener('click', showCard))
        if (openedCards[0].type === openedCards[1].type) {
            matched();
        } else {
            unmatched();
        }        
    }
}

const addClickListener = () => {
    card.forEach(element => {
        element.addEventListener('click', showCard);
    })
};

const firstClickListener = () => {
    card.forEach(element => {
        element.addEventListener('click', startTimer);
    })
}

const matched = () => {
    openedCards[0].classList.add('match');
    openedCards[1].classList.add('match');
    matchedCards.push(openedCards[0], openedCards[1]);
    openedCards = [];
    addClickListener();
    card.forEach(element => element.removeEventListener('click', startTimer));

    if (matchedCards.length === 10) {
        endGame();
    }
};

const unmatched = () => {
    setTimeout(() => {
        openedCards[0].classList.remove('show');
        openedCards[1].classList.remove('show');
        openedCards = [];
        addClickListener();
    }, 2000);
    card.forEach(element => element.removeEventListener('click', startTimer));
};

const shuffle = (arr) => {
    arr.forEach(card => {
        const randomArrange = Math.floor(Math.random() * 10);
        card.style.order = randomArrange;
    })
}

const startGame = () => {
    shuffle(card);
    firstClickListener();
    addClickListener();
    openCard();
    timer.innerHTML = `00:00`;
};

const timer = document.querySelector('.timer');
let startTime;
let elapsedTime;
let secondsString;
let minutesString;

const timeHandling = {
    getElapsedTime: function() {
        let timeDiff = (Date.now() - startTime.getTime()) / 1000;
        
        let minutes = parseInt(timeDiff / 60);
        let minutesString = minutes < 10 ? "0" + minutes : minutes;
        let seconds = parseInt(timeDiff - minutes * 60);
        secondsString = seconds < 10 ? "0" + seconds : seconds;

        return `${minutesString}:${secondsString}`;
    }
}

const startTimer = () => {
    startTime = new Date();
    card.forEach(element => element.removeEventListener('click', startTimer));
    
    elapsedTime = setInterval(() => {
        timer.innerText = timeHandling.getElapsedTime();
    }, 1000);
}

const endGame = () => {
    clearInterval(elapsedTime);
    setTimeout(() => {
        timer.innerText = "00:00";
        card.forEach(card => card.classList.remove("show"));
        matchedCards = [];
        startGame();
    }, 5000);
}

startGame();