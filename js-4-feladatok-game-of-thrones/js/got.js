const gotURL = './json/got.json';

const getData = async () => {
    const data = await fetch(gotURL).then(r => r.json());
    return data;
};

const filterCharacters = async () => {
    const characters = await getData();
    const filteredChars = characters.filter(item => item.dead !== true);
    return filteredChars;
};

const sortCharacters = async () => {
    const chars = await filterCharacters();
    chars.sort((a, b) => {
        a = a.name.split(" ");
        a = a[1] ? a[1] : a[0];
        b = b.name.split(" ");
        b = b[1] ? b[1] : b[0];
        return a.localeCompare(b);
    });
    return chars;
};

const charsDiv = document.querySelector('#characters');
const charDetailDiv = document.querySelector('.char-details');

const fillCharacters = async () => {
    const sortedChars = await sortCharacters();
    sortedChars.forEach(char => {
        const charDiv = document.createElement("div");
        charsDiv.appendChild(charDiv);
        charDiv.classList.add("character");
        const charImg = document.createElement("img");
        charDiv.appendChild(charImg);
        charImg.src = char.portrait;
        charImg.alt = char.name;
        charImg.classList.add("character-img");
        const charName = document.createElement("h2");
        charDiv.appendChild(charName);
        charName.textContent = char.name;

        const charDetail = () => {
            charDetailDiv.innerHTML = "";
            charDetailDiv.style.visibility = "visible";
            const charDetailImg = document.createElement("img");
            charDetailImg.src = char.picture;
            charDetailImg.alt = char.name;
            charDetailDiv.appendChild(charDetailImg);
            charDetailImg.classList.add("detail-img");
            const charDetailHeader = document.createElement("div");
            charDetailDiv.appendChild(charDetailHeader);
            const detailName = document.createElement("h3");
            charDetailHeader.appendChild(detailName);
            charDetailHeader.classList.add("char-details-head")
            detailName.textContent = char.name;

            if (char.house) {
                const house = document.createElement("img");
                house.classList.add("house");
                charDetailHeader.appendChild(house);
                house.src = `./assets/houses/${char.house}.png`;
            }

            const charDescr = document.createElement("p");
            charDetailDiv.appendChild(charDescr);
            charDescr.textContent = char.bio;
        }

        charDiv.addEventListener('click', charDetail);
    });
    return sortedChars;
};

const searchInput = document.querySelector(".input-field");

const search = async () => {
    const sortedChars = await sortCharacters();
    searchInput.addEventListener('input', function () {
        console.log(searchInput.value);
        const searchChar = sortedChars.filter(char =>
            char.name.toLowerCase().includes(searchInput.value.toLowerCase()));

        if (searchChar[0]) {

            charDetailDiv.innerHTML = "";
            charDetailDiv.style.visibility = "visible";
            const charDetailImg = document.createElement("img");
            charDetailImg.src = searchChar[0].picture;
            charDetailImg.alt = searchChar[0].name;
            charDetailDiv.appendChild(charDetailImg);
            charDetailImg.classList.add("detail-img");
            const charDetailHeader = document.createElement("div");
            charDetailDiv.appendChild(charDetailHeader);
            const detailName = document.createElement("h3");
            charDetailHeader.appendChild(detailName);
            charDetailHeader.classList.add("char-details-head")
            detailName.textContent = searchChar[0].name;

            if (searchChar[0].house) {
                const house = document.createElement("img");
                house.classList.add("house");
                charDetailHeader.appendChild(house);
                house.src = `./assets/houses/${searchChar[0].house}.png`;
            }

            const charDescr = document.createElement("p");
            charDetailDiv.appendChild(charDescr);
            charDescr.textContent = searchChar[0].bio;
        } else {
            const charDetailDiv = document.querySelector('.char-details');
            charDetailDiv.textContent = "Character not found.";
        }
    });
};

fillCharacters();
search();